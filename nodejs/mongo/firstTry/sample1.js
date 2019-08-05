const mongo = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

mongo.connect(url,(err,conn)=>
{
    conn.db("my-first-db").collection("collection2").aggregate([{
        $group:{
            _id: 0,
            age: {$min: '$age'}
        }
    }]).toArray((err,res)=>{if(!err)console.log(res)})
});

mongo.connect(url,(err,conn)=>{
    conn.db("my-first-db").collection("collection2").find({}).toArray((err,res)=>{
        if(!err){
        console.log(res);
    }
    })
});

mongo.connect(url,(err,conn)=>{
    conn.db("my-first-db").collection("collection2").insertOne({
        _id: 9,
        name: "Elena",
        company: "Wipro",
        age: 22
    },(err,res)=>{
        if(!err) console.log("Inserted");
    })
});







