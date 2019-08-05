const server = require("express").Router();
const VService= require("../services/verify.service").Service;
const vService=new VService();

var valid;

server.post('/verify',(req,res)=>{
vService.fetchUser(req.body,(err,response)=>{
    if(response=="")
    {
        res.status(500).json({
            message: "please enter valid OTP"
        })        
    }
    else if(err) 
        throw err;
    else
    {   
        valid=vService.verifyCode(response,req.body);
        if(valid)
        res.redirect('/check/password');
        else
        res.redirect('/check/refresh');
    }
})
});

server.get('/refresh',(req,res)=>{
    vService.refreshCode(req.body,(err,response)=>{
        if(response)
        res.status(200).json({
            message: "Code resent to email"
        })
    });
})

server.post('/password',(req,res)=>{
    vService.addPass(req.body,(err,response)=>{
        if(response)
        res.status(200).json({
            message: "user has been registered successfully!"
        })
    })
});

module.exports={server};
