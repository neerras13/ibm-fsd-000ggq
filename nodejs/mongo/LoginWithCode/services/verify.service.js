const mongo=require("mongodb").MongoClient;
const UService=require("./register.service").Service;
const url="mongodb://localhost:27017";
const uService= new UService();
const Email=require("./email.service").Email;
const emailObj=new Email();

class Service{
    fetchUser(_Code,callback){
        var user;
        this.code=_Code.code;
        mongo.connect(url,(err,con)=>{
            con.db("loginwithcode").collection("user").find({code: this.code}).toArray((err,res)=>{
                callback(err,res);

            });
        })
         
    }

    verifyCode(user,_Code)
    {
        var isValid=0;
        var time=uService.codeExpire();
        time=time-1800000;
        if(time <= user[0].ttl)
            return isValid=1;
        else
        {
            return isValid=0;
        }    
    }

    addPass(user,callback)
    {
        if(user.npass == user.cpass)
        {
            mongo.connect(url,(err,con)=>{
                con.db("loginwithcode").collection("user").update(
                    {code: this.code },
                    {$set: {password: user.npass}},
                    {upsert: true},
                    (error,response)=>{
                    callback(error,response);
                });
            })
        }

    }

    setCode(oldcode,newcode)
    {
      mongo.connect(url,(err,con)=>{
            con.db("loginwithcode").collection("user").update(
                {code: oldcode},
                {$set: {code: newcode}},
                {upsert: true}
            );
        })
    }

    refreshCode(_Code,callback)
    {
        var user={};
        const newcode=uService.makeid();
        this.fetchUser(_Code.code,(err,res)=>{
        user={
            to: res[0].email,
            body: newcode
        }});
        emailObj.email(user);
        this.setCode(_Code.code,newcode,(err,res)=>{
            callback(err,res);
        });
    }
        
        
    

    
}

module.exports={Service};