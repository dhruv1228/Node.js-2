const express=require('express');
const user=require('../model/user');

const loginroute=express.Router();

loginroute.get('/',(req,res)=>{
  res.render('prelogin');
});

loginroute.get('/login',(req,res)=>{
  res.render('login');
});

loginroute.post('/login',(req,res)=>{
  const {email,password}=req.body;
  const users=new user();
  users.fetch(email,password).then((userss)=>{
    if(userss[0].length>0){
      console.log(userss[0][0].name);
      res.render('profile',{name:userss[0][0].name});
    }
  }).catch((err)=>{
    console.log(err);
  })
  
})

exports.loginroute=loginroute;