const { ApolloServer } = require("apollo-server");
const TrackAPI = require("./datasources/track-api");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const dataSources = () => ({
  trackAPI: new TrackAPI(),
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server.listen().then((info) => console.log(`Server listening at ${info.url}!`));
