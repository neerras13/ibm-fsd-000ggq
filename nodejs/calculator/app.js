const express = require('express');
const server = express();
const cors = require('cors');
const body = require('body-parser');
server.use(cors());
server.use(body.json());


server.post('/login',(req,res)=>{
    let email=req.body.email;
    let pass = req.body.pass;
    res.setHeader('content-type','application/json');
    res.end(JSON.stringify({
    data : login(email,pass)
    }) )
} );

function login(email,pass){
    if(email == "qwerty" && pass == "qwerty")
      return email;

}

server.listen(1234);