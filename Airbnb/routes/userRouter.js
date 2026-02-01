const express=require('express');
const path=require('path');

const userRouter=express.Router();

userRouter.get('/',(req,res,next)=>{
  res.sendFile(path.join(__dirname,'../','views','home.html'));
});

userRouter.get('/contact-us',(req,res,next)=>{
  res.sendFile(path.join(__dirname,'../','views','contact-us.html'));
});

userRouter.post('/contact-us',(req,res,next)=>{
  res.send("<h1>Thank you for contacting us, We will get back to you soon</h1>");
  console.log(req.body);
  console.log(req.body.name);
});

exports.userRouter=userRouter;