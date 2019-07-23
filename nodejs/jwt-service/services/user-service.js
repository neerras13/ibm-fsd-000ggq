const users = require('../db/users.js').users;

 class Service{
     constructor(){
         this.users= users;
     }
     register(userIn){
         this.users.push(userIn);
         
     }

     getAll(){
         return this.users;
     }
 }

 module.exports.Uservice = Service;