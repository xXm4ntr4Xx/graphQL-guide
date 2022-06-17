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
    },

    deleteUser(parent,args){
      let userIndex ;
      console.log(users)
      users.map(user=>{
        if(user.name===args.name){
          console.log(users.indexOf(user))
          userIndex = users.indexOf(user)
        }
      })
      users.splice(userIndex,1)
      return args
    },
  }
}