const express=require('express');
const path=require('path');

const hostRouter=express.Router();

hostRouter.get('/host/add-home',(req,res)=>{
  res.sendFile(path.join(__dirname,'../','views','add-home.html'));
});

hostRouter.post('/host/add-home',(req,res)=>{
  res.sendFile(path.join(__dirname,'../','views','home-added.html'));
});

exports.hostRouter=hostRouter;