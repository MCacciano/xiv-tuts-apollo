const root = require('./root');
const courses = require('./courses');

const schemaArray = [root, courses];

module.exports = schemaArray;

// module.exports = gql`
//     type Course {
//         title: String
//         author: String
//         description: String
//         url: String
//     }
//     type Query {
//         courses: [Course]
//     }
// `;
