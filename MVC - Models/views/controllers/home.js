const home=require('../../models/home');

//const {registeredHomes}=require('./host');
exports.gethome=(req,res,next)=>{
  const registeredhomes=home.fetchAll();
  console.log(registeredhomes);
  res.render('home',{registeredhomes:registeredhomes,pagetitle: 'Airbnb'});
}