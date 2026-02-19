const home=require('../../models/home');

exports.getAdd_home=(req,res,next)=>{
  res.render('addHome',{pagetitle: 'Add Home'});
};

//const registeredHomes=[];
exports.postAdd_home=(req,res,next)=>{
  const newhome=new home(req.body.homename,req.body.amount,req.body.rating,req.body.address,req.body.photourl);
  newhome.save();
  console.log("Home registered sucessfully",req.body);
  //registeredHomes.push(req.body);
  res.render('homeAdded',{pagetitle: 'Home Added'});
  
}
//exports.registeredHomes=registeredHomes;