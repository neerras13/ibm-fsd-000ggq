/*function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    return result;
 }
 
 //console.log(makeid(4));
 var a=new Date();
 var now = new Date();
 
 now.setMinutes(now.getMinutes() + 30); // timestamp
 console.log(now);
 now = new Date(now); // Date object
 console.log("before",a);
 console.log("later",now);
 console.log(a.getTime()==now.getTime()); */

const mongo=require("mongodb").MongoClient;
const url="mongodb://localhost:27017";
var user=[];
mongo.connect(url,(err,con)=>{
    con.db("loginwithcode").collection("user").find({code: "BfZauj"}).toArray((err,res)=>{
        console.log(res=="");
    });
    
});



