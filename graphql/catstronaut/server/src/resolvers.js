const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate the homepage grid of our web client
    tracks(_, __, { dataSources }) {
      return dataSources.trackAPI.getTracks();
    },
    // get a single track by ID, for the track page
    track(_, { id }, { dataSources }) {
      return dataSources.trackAPI.getTrack(id);
    },
    // get a single module by ID
    module(_, { id }, { dataSources }) {
      return dataSources.trackAPI.getModule(id);
    },
  },
  Mutation: {
    // increments a track's numberOfViews property
    async incrementTrackViews(_, { id }, { dataSources }) {
      try {
        const track = await dataSources.trackAPI.incrementTrackViews(id);

        return {
          code: 200,
          success: true,
          message: `Successfully incremented number of views for track ${id}`,
          track,
        };
      } catch (err) {
        return {
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
          track: null,
        };
      }
    },
  },
  Track: {
    // lazy loads the Track's author
    author({ authorId }, _, { dataSources }) {
      return dataSources.trackAPI.getAuthor(authorId);
    },
    // lazy loads the Track's modules
    modules({ id }, _, { dataSources }) {
      return dataSources.trackAPI.getTrackModules(id);
    },
  },
};

module.exports = resolvers;
