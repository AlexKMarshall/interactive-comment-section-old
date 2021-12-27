// @ts-nocheck

import { ApolloServer } from 'apollo-server-micro'
import Cors from 'micro-cors'
import { createContext } from 'src/graphql/context'
import { schema } from 'src/graphql/schema'

const cors = Cors()

// there's a conflict with the schema definition here that TS is complaining about
const apolloServer = new ApolloServer({
  schema,
  context: createContext
})
const startServer = apolloServer.start()

export default cors(async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }
  await startServer

  await apolloServer.createHandler({
    path: '/api/graphql'
  })(req, res)
})

export const config = {
  api: {
    bodyParser: false
  }
}
