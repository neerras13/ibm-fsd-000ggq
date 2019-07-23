const express= require('express');
const server = express();
const parser = require('body-parser');
const userroutes = require('./routes/user').userroutes;

server.use(parser.json());

server.get('/status',(req,res)=>{
    res.status(200).json({
      message: 'running'
    });
});

server.listen(4000);

//mapping user routes
server.use('/user',userroutes);