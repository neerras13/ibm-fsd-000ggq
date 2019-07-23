const express = require('express');
const server = express();

server.post('/user',(req,res)=>{
    res.status(200).json({
      message: 'running'
    });
});

server.listen(2329);