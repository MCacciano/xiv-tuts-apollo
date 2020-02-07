const { gql } = require('apollo-server');

const courses = gql`
    type Course {
        title: String
        author: String
        description: String
        url: String
    }

    extend type Query {
        courses: [Course]
    }
`;

module.exports = courses;
