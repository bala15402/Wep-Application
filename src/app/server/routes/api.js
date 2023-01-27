const express=require('express')
const router = express.Router();
const User =require('../user')
const mongoose= require('mongoose');
const db ="mongodb://localhost:27017/eventsdb"

mongoose.connect(db,err=>{
    if(err){
        console.error('Error!'+err);
    }
    else{
        console.log('connected to mongodb');
    }
})
router.get('/',(req,res)=>{
    res.send('from API server')
});

router.post('./register',(req,res)=>{
   let userData = req.body;
   let user =new User(userData);
   user.save((error,registeredUser)=>{
       if(error){
           console.log(error)
       }else{
           res.status(200).send(registeredUser)
       }
   })
})

router.post('/login',(req,res)=>{
    let userData =req.body

    User.findOne({email:userData.email},(error,user)=>{
        if(error){
            console.log(error);
        }else{
            if(!user){
                res.status(401).send('Invalid email')
            }else
            if(user.password !==userData.password){
                res.status(401).send('Invalid password');
            }else{
                res.status(200).send(user);
            }
        }
    })
})

module.exports = router;