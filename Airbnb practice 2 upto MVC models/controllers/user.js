const {registeredhomes}=require('../routes/hostRoute');

exports.gethome=(req,res,next)=>{
  console.log(registeredhomes);
  res.render('home',{registeredhomes:registeredhomes,pagetitle : 'Home Page'});
};

exports.getcontact=(req,res,next)=>{
  res.render('contact-us',{pagetitle : 'Contact Us'});
};

exports.postcontact=(req,res,next)=>{
  res.render('contacted',{pagetitle : 'Thanks for Contacting US'});
};

exports.getbookings=(req,res,next)=>{
  res.render('bookings',{pagetitle : 'Bookings'});
};