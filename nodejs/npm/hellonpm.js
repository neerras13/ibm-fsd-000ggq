const exp = require('express');       //has predefined service method functions
const server = exp();                 //express is a package that is for creating servies
const parser = require('body-parser');

server.use(parser.json());

//create a service
server.get('/login/:text/:id',(req,res)=>{ 
    res.setHeader('content-type','application/json');
    res.end(JSON.stringify({
        message: req.params.text,
        id: req.params.id
}));
});

//service to get data and post
server.post('/user',(req,res)=>{
    res.setHeader('content-type','application/json');
    res.end(JSON.stringify({
        id : req.body.id,
        name: req.body.name
        
    }));
});

//action on listen
server.listen("2329",()=>{
    console.log("Service is started");
});