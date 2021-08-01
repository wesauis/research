const { ApolloServer } = require("apollo-server");
const TrackAPI = require("./datasources/track-api.js");

const typeDefs = require("./schema.js");
const resolvers = require("./resolvers.js");

const dataSources = () => ({
  trackAPI: new TrackAPI(),
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server.listen().then((info) => console.log(`Server listening at ${info.url}!`));
