exports.getAdd_home=(req,res,next)=>{
  res.render('addHome',{pagetitle: 'Add Home'});
};

const registeredHomes=[];
exports.postAdd_home=(req,res,next)=>{
  console.log("Home registered sucessfully",req.body);
  registeredHomes.push(req.body);
  res.render('homeAdded',{pagetitle: 'Home Added'});
  
}
exports.registeredHomes=registeredHomes;