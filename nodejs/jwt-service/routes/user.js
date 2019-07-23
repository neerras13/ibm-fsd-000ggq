const router = require('express').Router();

//status api
router.get('/status',(req,res)=>{
    req.status(200).json({         //http status codes
        message: "user service started"
    });
});

//sign up
router.post('/register',(req,res)=>{
    res.status(200).json({
        message: 'User registered'
    });
});

//login
router.post('/login',(req,res)=>{
    res.status(200).json({
        message: 'User logged in'
    });
});

module.exports.userroutes = router;