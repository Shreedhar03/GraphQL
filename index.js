const { ApolloServer } = require('apollo-server')
const {typeDefs} = require('./schema/typeDefs')
const {resolvers} = require('./schema/resolvers')
const server = new ApolloServer({ typeDefs, resolvers })
// resolvers ==> functions to manipulate DB

server.listen().then((res) => {
    console.log(`API Running at ${res.url}`)
})