const mongo=require("mongodb").MongoClient;
const jwt=require("jsonwebtoken");
const url="mongodb://localhost:27017";
const Email=require("./email.service").Email;
const emailObj=new Email();

class Service
{
    addUser(_user,callback)
    {
        _user.token=this.generateToken(_user);
        _user.code=this.makeid();
        _user.ttl=this.codeExpire();
        mongo.connect(url,(err,con)=>{
            con.db("loginwithcode").collection("user").insert(_user,(err,response)=>{
                callback(err,response);
            })
        })
        const userObj={
            to: _user.email,
            body: _user.code
        }
        emailObj.email(userObj);
    }

    generateToken(_user)
    {
        const _token = jwt.sign(_user,
        "myPrivateKey",
        {
            expiresIn : '1200000ms'
        });
        return _token;
    
    }
    
    codeExpire(){

        var now = new Date();
        now.setMinutes(now.getMinutes() + 30); // timestamp
        now = new Date(now); // Date object
        return now.getTime();
    }

    makeid() 
    {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < 6; i++ ) 
        {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        
        return result;
    }
}

module.exports = {Service};