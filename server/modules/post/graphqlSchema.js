const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Post {
    _id: String,
    name: String,
    surName: String,
  },
  type Query {
    posts: [Post]
  },
  type Mutation {
    addPost(name: String!, surName: String!): Post,
  }
`;

module.exports = typeDefs;