import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
  }

  type Query {
    posts: [Post]!
  }
`
