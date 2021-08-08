const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    todos: [Todo!]!
    todo(id: ID!): Todo
  }

  type Mutation {
    createTodo(description: String!, done: Boolean): Todo!
    updateTodo(id: ID!, description: String, done: Boolean): Todo!
    deleteTodo(id: ID!): Boolean!
  }

  type Todo {
    id: ID!
    done: Boolean!
    description: String!
  }
`;

module.exports = { typeDefs }