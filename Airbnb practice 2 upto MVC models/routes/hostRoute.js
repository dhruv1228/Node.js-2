const express=require('express');

const hostRouter=express.Router();

hostRouter.get('/host/add-home',(req,res,next)=>{
  res.render('add-home',{pagetitle : 'Add Home'});
});

const registeredhomes=[];
hostRouter.post('/host/add-home',(req,res,next)=>{
  res.render('home-added',{pagetitle : 'Home Added'});
  console.log(req.body);
  registeredhomes.push(req.body);
  console.log(registeredhomes);
});

exports.hostRouter=hostRouter;
exports.registeredhomes=registeredhomes;