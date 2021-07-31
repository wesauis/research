const { ApolloServer } = require("apollo-server");

const typeDefs = require("./schema.js");

const mocks = {
  Query: () => ({
    tracksForHome: () => [...new Array(6)]
  }),
  Track: () => ({
    title: () => "Astro Kitty, Space Explorer",
    thumbnail: () => "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
    length: () => 1210,
    modulesCount: () => 6,
  }),
  Author: () => ({
    name: "Grumpy Cat",
    photo: "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
  })
};

const server = new ApolloServer({ typeDefs, mocks });

server.listen().then((info) => console.log(`Server listening at ${info.url}!`));
