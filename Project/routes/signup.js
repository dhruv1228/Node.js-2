const express=require('express');
const signupRoute=express.Router();
const user=require('../model/user');

signupRoute.get('/signup',(req,res)=>{
    res.render('signup');
});

signupRoute.post('/signup',(req,res)=>{
    const {name,email,Password}=req.body;
    console.log(req.body);
    const users=new user(name,email,Password);
    users.save().then(()=>{
        res.redirect('/login');
    });
});

exports.signupRoute=signupRoute;