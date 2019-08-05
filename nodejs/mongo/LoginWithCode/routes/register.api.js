const server = require("express").Router();
const Service=require("../services/register.service").Service;
const uService = new Service();

server.get('/status',(req,res)=>{
    res.status(200).json({
        message: "Registration service is running"
    })
});

server.post('/register',(req,res)=>{
    uService.addUser(req.body,(err,result)=>{
        if(err) throw err;
        else
        res.status(200).json({
            message: "User logged! Please check email and enter code.",
            Result: result
        })
    })
});


module.exports.server=server;
