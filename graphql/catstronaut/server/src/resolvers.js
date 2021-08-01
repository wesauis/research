const resolvers = {
  Query: {
    /** 
     * returns an array of Tracks that will be used 
     * to populate the homepage grid of our web client 
     */
    tracksForHome(_parent, _args, { dataSources }, _info) {
      return dataSources.trackAPI.getTracksForHome();
    },
  },
  Track: {
    author({ authorId }, _args, { dataSources }, _info) {
      return dataSources.trackAPI.getAuthor(authorId)
    }
  }
};

module.exports = resolvers;