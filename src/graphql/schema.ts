import {
  asNexusMethod,
  makeSchema,
  mutationType,
  nonNull,
  objectType,
  queryType,
  stringArg,
} from 'nexus'

import { DateTimeResolver } from 'graphql-scalars'
import { join } from 'path'

const DateTime = asNexusMethod(DateTimeResolver, 'DateTime')

const Comment = objectType({
  name: 'Comment',
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.string('content')
    t.nonNull.DateTime('createdAt')
    t.nonNull.DateTime('updatedAt')
  },
})

const Query = queryType({
  definition(t) {
    t.list.field('getComments', {
      type: 'Comment',
      resolve: async (_parent, _args, ctx) => {
        return ctx.db.comment.findMany()
      },
    })
  },
})
const Mutation = mutationType({
  definition(t) {},
})

export const schema = makeSchema({
  types: [Query, Comment, DateTime],
  outputs: {
    typegen: join(__dirname, 'generated', 'nexus.d.ts'),
    schema: join(__dirname, 'schema.graphql'),
  },
  contextType: {
    module: join(process.cwd(), 'src/graphql/context.ts'),
    export: 'Context',
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'db',
      },
    ],
  },
})
