const express=require('express');
const path=require('path');

const hostRouter=express.Router();

hostRouter.get('/host/add-home',(req,res)=>{
  res.sendFile(path.join(__dirname,'../','views','add-home.html'));
});

const registeredHomes=[];
hostRouter.post('/host/add-home',(req,res)=>{
  console.log("Home registered successfully",req.body.homeName);
  registeredHomes.push({homename : req.body.homeName});
  res.sendFile(path.join(__dirname,'../','views','home-added.html'));
});

exports.hostRouter=hostRouter;
exports.registeredHomes=registeredHomes;