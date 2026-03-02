const home=require('../../models/homes');

exports.getaddhome=(req,res,next)=>{
  res.render('host/addHome',{pagetitle : "Add Home"});
};

exports.postaddhome=(req,res,next)=>{
  console.log(req.body);
  const homes=new home(req.body.homename,req.body.location,req.body.price,req.body.rating,req.body.imageurl);
  homes.save();
  res.render('host/homeAdded',{pagetitle : "Home Added"});
};
