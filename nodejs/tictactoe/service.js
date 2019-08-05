const express = require("express");
const server=express();
const parser=require("body-parser");
const MongoClient=require("mongodb").MongoClient;
const cors=require("cors");
const url = "mongodb://localhost:27017/";


server.use(parser.json());
server.use(cors());

server.post("/store",(req,res)=>{
    res.setHeader('content-type','application/json');
    add(req.body,(err,res)=>{
        if(err)
        console.log("Error!")
        else
        console.log("Game saved!")
    })
})

server.listen("2329",()=>{
    console.log("Server started");
})

function add(items,callback){ 
    MongoClient.connect(url,(err,conn)=>{
        conn.db("my-first-db").collection("collection3").insertMany(items
            ,(err,response)=>{
            callback(err,response);
    })
})

}




