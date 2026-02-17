const {registeredHomes}=require('./host');
exports.gethome=(req,res,next)=>{
  console.log(registeredHomes);
  res.render('home',{registeredHomes:registeredHomes,pagetitle: 'Airbnb'});
}