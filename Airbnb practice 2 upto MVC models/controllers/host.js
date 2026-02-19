const home=require('../models/home');

exports.getaddhome=(req,res,next)=>{
  res.render('add-home',{pagetitle : 'Add Home'});
};

exports.postaddhome=(req,res,next)=>{
  res.render('home-added',{pagetitle : 'Home Added'});
  const newhome=new home(req.body.homename,req.body.location,req.body.price,req.body.rating);
  newhome.save();
};