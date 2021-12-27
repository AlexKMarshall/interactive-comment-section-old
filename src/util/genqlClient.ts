import { createClient } from 'src/graphql/generated/genql'

export const client = createClient({
  url: '/api/graphql'
})
