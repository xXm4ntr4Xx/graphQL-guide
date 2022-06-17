//here is where we call all the function that interact with the database
// qhere we can use query string

import {users} from '../FakeData.js'


export const resolvers ={
  Query:{
    getAllUsers(){
      return users;
    }
  },

  Mutation:{
    createUser(parent,args){
      console.log(args)
      const newUser = args;
      users.push(newUser);
      return newUser;
    }
  }
}