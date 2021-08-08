const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema.js");
const { resolvers } = require("./resolvers.js");
const TodoStore = require("./datasource/todo-store.js");

function createServer() {
  return new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
      todoStore: new TodoStore(),
    }),
  });
}

module.exports = { createServer };
