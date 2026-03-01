const home=require('../../models/home');

  const registeredhomes=home.fetchAll();
  console.log(registeredhomes);
//const {registeredHomes}=require('./host');
exports.gethome=(req,res,next)=>{
  res.render('store/home-list',{registeredhomes:registeredhomes,pagetitle: 'Airbnb'});
};

exports.getbooking=(req,res,next)=>{
  const registeredhomes=home.fetchAll();
  console.log(registeredhomes);
  res.render('store/bookings',{registeredhomes:registeredhomes,pagetitle: 'Bookings'});
};

exports.getcontact=(req,res,next)=>{
  res.render('contactus',{pagetitle: 'Contact Us'});
};

exports.getcontacted=(req,res,next)=>{
  let customer={name:req.body.name,email:req.body.email};
  console.log(customer);
  res.render('contacted',{customer:customer,pagetitle:'Contact Us'});

};

exports.getindex=(req,res,next)=>{
  res.render('store/index',{pagetitle:'Airbnb'});

};

exports.getfavourites=(req,res,next)=>{
  res.render('store/favourites-list',{registeredhomes:registeredhomes,pagetitle: 'Airbnb'});

};