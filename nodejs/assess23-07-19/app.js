const express = require('express');
const server = express();
//const items = require('./dbs/items').items;
//const users = require('./dbs/users').users;
const serv = require('./services/user-service').Service;
const service=new serv();
const parser=require('body-parser');
const cors = require('cors');
server.use(cors());
server.use(parser.json());


server.get('/login',(req,res)=>{
    res.setHeader('content-type','application/json');
    const data = service.login(req.query.email,req.query.pass);
    if(data != null || data != undefined)
    res.end(JSON.stringify(data));
    else
    res.end(JSON.stringify({
        email: null,
        pass:null
    }))
 } );

 server.get('/modify',(req,res)=>{
    res.setHeader('content-type','application/json');
    res.end(JSON.stringify(service.modify(req.query.itlist,req.query.quantity)));
    
 } );



server.get('/item',(req,res)=>{
    res.setHeader('content-type','application/json');

    service.modify(req.params.itlist,req.params.quantity);
});
   

server.listen(7890,()=>{
    console.log("Server is running");
});