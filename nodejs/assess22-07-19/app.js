const express = require('express');
const server = express();
//const items = require('./dbs/items').items;
//const users = require('./dbs/users').users;
const serv = require('./services/user-service').Service;
const service=new serv();
const cors = require('cors');
server.use(cors());


server.get('/login',(req,res)=>{
    res.setHeader('content-type','application/json');
    res.end(service.login(req.params.email,req.params.pass));
});

server.get('/item',(req,res)=>{
    res.setHeader('content-type','application/json');

    service.modify(req.params.itlist,req.params.quantity);
});
   

server.listen(1234,()=>{
    console.log("Server is running");
});