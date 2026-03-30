const express=require('express');

const loginroute=express.Router();

loginroute.get('/',(req,res)=>{
  res.render('prelogin');
});

loginroute.get('/login',(req,res)=>{
  res.render('login');
});

exports.loginroute=loginroute;