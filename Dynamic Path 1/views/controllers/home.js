const home=require('../../models/home');

  //const registeredhomes=home.fetchAll();
  // console.log(registeredhomes);
exports.gethome=(req,res,next)=>{
  home.fetchAll((registeredHomes) =>
    res.render('store/home-list',{registeredhomes:registeredHomes,pagetitle: 'Airbnb'
    })
  );
  // res.render('store/home-list',{registeredhomes:registeredhomes,pagetitle: 'Airbnb'});
};

exports.getbooking=(req,res,next)=>{
  home.fetchAll((registeredHomes) =>
    res.render('store/bookings',{registeredhomes:registeredHomes,pagetitle: 'Bookings'
    })
  );
  // const registeredhomes=home.fetchAll();
  // console.log(registeredhomes);
  // res.render('store/bookings',{registeredhomes:registeredhomes,pagetitle: 'Bookings'});
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
   home.fetchAll((registeredHomes) =>
    res.render('store/favourites-list',{registeredhomes:registeredHomes,pagetitle: 'Airbnb'
    })
  );
  // res.render('store/favourites-list',{registeredhomes:registeredhomes,pagetitle: 'Airbnb'});

};

exports.gethomedetails=(req,res,next)=>{
  const homeId=req.params.homeid;
  console.log("At home details page", homeId);
  home.findbyId(homeId,(homeFound)=>{
    console.log("Home found",homeFound);
    res.render('store/home-details',{home:homeFound,pagetitle: 'Airbnb'})
  })
  
};