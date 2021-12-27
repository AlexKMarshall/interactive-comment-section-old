import { Context } from './context'

export const resolvers = {
  Query: {
    posts: (_parent: any, _args: any, ctx: Context) => {
      return ctx.prisma.post.findMany()
    },
  },
}
