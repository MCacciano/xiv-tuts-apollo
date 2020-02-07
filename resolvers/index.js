const courseResolver = require('./courses');

const rootResolver = {
    Query: {
        root: String,
        ...courseResolver
    },
    Mutation: {
        root: String
    }
};

module.exports = rootResolver;
