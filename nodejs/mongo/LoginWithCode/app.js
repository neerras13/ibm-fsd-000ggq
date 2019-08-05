const express = require("express");
const cors=require("cors");
const parser = require("body-parser");
const verAPI=require("./routes/verify.api").server;
const regAPI=require("./routes/register.api").server;

const server=express();
server.use(cors());
server.use(parser.json());


server.get('/status',(req,res)=>{
    res.status(200).json({ 
        message: "App has started"
    });
})
 
server.use('/user',regAPI);
server.use('/check',verAPI);

const PORT="12345";
server.listen(PORT,()=>{
    console.log("Server is running");
})