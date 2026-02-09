const express=require('express');
const path=require('path');

const hostRoute=express.Router();

hostRoute.get('/host/add-home',(req,res,next)=>{
  res.render('addHome',{pagetitle: 'Add Home'});
});

const registeredHomes=[];
hostRoute.post('/host/add-home',(req,res,next)=>{
  console.log("Home registered sucessfully",req.body);
  registeredHomes.push(req.body);
  res.render('homeAdded',{pagetitle: 'Home Added'});
  
});

exports.hostRoute=hostRoute;
exports.registeredHomes=registeredHomes;