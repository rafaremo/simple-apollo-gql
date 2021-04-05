const gql = require("graphql-tag");
const { ApolloServer } = require("apollo-server");

const typeDefs = gql`
    type User {
        email: String!
        name: String!
        surename: String
        avatar: String
    }

    type Query {
        me: User!
    }
`

const resolvers = {
    Query: {
        me() {
            return {
                email: "example@acromati.co",
                name: "Example",
                surename: "Test",
                avatar: "test"
            }
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen(4000).then(() => console.log("Listening on port 4000"));
