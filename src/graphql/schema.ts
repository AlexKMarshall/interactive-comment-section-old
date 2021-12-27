import {
  asNexusMethod,
  makeSchema,
  mutationType,
  nonNull,
  objectType,
  queryType,
  stringArg
} from 'nexus'

import { Context } from './context'
import { DateTimeResolver } from 'graphql-scalars'
import { gql } from 'apollo-server-micro'
import { join } from 'path'

const DateTime = asNexusMethod(DateTimeResolver, 'DateTime')

const Post = objectType({
  name: 'Post',
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.string('title')
  }
})

const Query = queryType({
  definition(t) {
    t.list.field('getPosts', {
      type: 'Post',
      resolve: async (_parent, _args, ctx) => {
        return ctx.db.post.findMany()
      }
    }),
      t.field('getOnePost', {
        type: 'Post',
        args: {
          id: nonNull(stringArg())
        },
        resolve: async (_parent, args, ctx) => {
          try {
            return ctx.db.post.findUnique({ where: { id: args.id } })
          } catch (error) {
            throw new Error(`${error}`)
          }
        }
      })
  }
})
const Mutation = mutationType({
  definition(t) {}
})

export const schema = makeSchema({
  types: [Query, Post, DateTime],
  outputs: {
    typegen: join(__dirname, 'generated', 'nexus.d.ts'),
    schema: join(__dirname, 'schema.graphql')
  },
  contextType: {
    module: join(process.cwd(), 'src/graphql/context.ts'),
    export: 'Context'
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'db'
      }
    ]
  }
})

export const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
  }

  type Query {
    posts: [Post]!
  }
`
