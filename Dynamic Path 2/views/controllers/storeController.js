const home=require('../../models/homes');
const favv=require('../../models/fav');
const contact=require('../../models/contact');

exports.getindex=((req,res,next)=>{
  res.render('store/index',{pagetitle : 'Airbnb'});
});

exports.gethome=(req,res,next)=>{
  home.fetchAll(registeredhomes=>{
    res.render('store/home-list',{pagetitle : "Home",registeredhomes : registeredhomes});
  });
  
};

exports.getcontact=(req,res,next)=>{
  res.render('contactus',{pagetitle : "Contact Us"});
};

exports.getcontacted=(req,res,next)=>{
  new contact(req.body.name,req.body.number);
  contact.save();
  const registeredcontacts=[{name : req.body.name,number : req.body.number}];
  res.render('contacted',{pagetitle : "Thanks for contacting us",registeredcontacts : registeredcontacts});
};

exports.getbooking=(req,res,next)=>{
  res.render('store/bookings',{pagetitle: "Bookings"});
};

exports.posthomedetails=(req,res,next)=>{
  const homeID=req.params.homeid;
  home.findbyID(homeID,homefound=>{
    res.render('store/home-details',{pagetitle : "Home details",home : homefound});
  });
};

exports.getcontactdetails=(req,res,next)=>{
  const homeid=req.params.homeid;
  home.findcontactdetails(homeid,contactfound=>{
    res.render('store/contact-dealer',{pagetitle:"Contact Dealer",contact:contactfound});
  })
}


exports.getfavouritesid=(req,res,next)=>{
  const favid=req.params.favid;
  const favhomes=new favv(favid);
  favhomes.save();

};

exports.getfavourites=(req,res,next)=>{
  favv.fetchfav(homes=>{
    res.render('store/fav-list',{pagetitle : "Favourites",registeredhomes : homes});
  })

};

exports.removehome=(req,res,next)=>{
  const homeid=req.params.homeid;
  const deletee=req.query.delete =='true';
  if(deletee){
    favv.deletebyid(homeid);
    res.redirect('/favourites');
  }
}


