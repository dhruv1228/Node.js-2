const express=require('express');
const path=require('path');

const userRoute=express.Router();
const {registeredHomes}=require('./hostRoute');
const { name } = require('ejs');

userRoute.get('/',(req,res,next)=>{
  console.log(registeredHomes);
  res.render('home',{registeredHomes:registeredHomes,pagetitle: 'Airbnb'});
});

userRoute.get('/contact-us',(req,res,next)=>{
  res.render('contactus',{pagetitle: 'Contact Us'});
});

userRoute.post('/contact-us',(req,res,next)=>{
  let customer={name:req.body.name,email:req.body.email};
  console.log(customer);
  res.render('contacted',{customer:customer,pagetitle:'Contact Us'});

});

exports.userRoute=userRoute;