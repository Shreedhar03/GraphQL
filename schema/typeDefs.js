const { gql } = require('apollo-server')

const typeDefs = gql`

    type User{
        id:ID!
        name:String!
        username:String!
        age: Int!
        nationality: Nationality!
        friends: [User]
        favMovies: [Movie]
    }
    type Movie{
        id: ID!
        name: String!
        year: Int!
        oscarReceived: Boolean!
    }
    type Query{
        users: [User!]!
        user(id: ID!): User
        movies: [Movie!]!
        movie(name: String!): Movie
    }


    input CreateUserInput{
        name:String!
        username:String!
        age: Int!
        nationality: Nationality = INDIA
    }
    input UpdateUsernameInput{
        id: ID!
        newUsername:String!
    }
    type Mutation{
        createUser(input: CreateUserInput): User!
        updateUsername(input: UpdateUsernameInput): User
        deleteUser(id: ID!): User
    }

    enum Nationality{
        INDIA
        USA
        CANADA
        BRAZIL
        DUBAI
        RUSSIA
        NEPAL
    }

`

module.exports = { typeDefs }