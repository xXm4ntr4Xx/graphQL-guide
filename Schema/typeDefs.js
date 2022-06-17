import { gql } from "apollo-server-express"


export const typeDefs  = gql`
  type User{
    name: String!
    age: Int!
    married: Boolean!
  }

  #comment in gql



  #Queries to retreive information 
    type Query{
      getAllUsers:[User!]!
    }



  #Mutations to update,create data
    type Mutation{
      #in this case we need to pass the argument we specify inside our fakeData table
      
      createUser(name:String!,age:Int!,married:Boolean!): User!
      deleteUser(name:String!,age:Int!,married:Boolean!): User!
    }

`