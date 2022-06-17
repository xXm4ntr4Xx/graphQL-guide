import express from 'express';
import {ApolloServer} from 'apollo-server-express'
import { typeDefs } from './Schema/typeDefs.js';
import {resolvers} from './Schema/resolvers.js'

const app = express();
const port = 3000;

const server = new ApolloServer({typeDefs,resolvers})

await server.start()

server.applyMiddleware({app})


app.listen(port,()=>{
  console.log(`Server running on port : ${port}`)
})