const nodemailer = require('nodemailer');

class Email {
    constructor(){
        this.smtpSetup = {
            service : "gmail",
            auth :{
                user : 'ibmtechtraining007@gmail.com',
                pass : 'India@786'
            }
        }
        // configure the smtp settings
        this.mailer = nodemailer.createTransport(this.smtpSetup);
    }
    email(userObj){
        this.mailer.sendMail({
            from : 'ibmtechtraining007@gmail.com',
            to : userObj.to,
            subject : "Verification Code",
            /*text : emailBody, */
            html : userObj.body
        },(err,response)=>{
            if(err){
                console.log(err);
                return "Unable to send email";
            }else{
                console.log('Email Sent');
                return "Email Sent Successfully";
            }
        })
    }
    
}
module.exports.Email = Email;