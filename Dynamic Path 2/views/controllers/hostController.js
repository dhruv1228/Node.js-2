const home=require('../../models/homes');

exports.getaddhome=(req,res,next)=>{
  res.render('host/edit-home',{pagetitle : "Add Home",editing :false});
};

exports.postaddhome=(req,res,next)=>{
  console.log(req.body);
  const homes=new home(req.body.homename,req.body.location,req.body.price,req.body.rating,req.body.number,req.body.imageurl);
  homes.save();
  res.render('host/homeAdded',{pagetitle : "Home Added"});
};


exports.gethosthomes=(req,res,next)=>{
  home.fetchAll(registeredhomes=>{
    res.render('host/host-home-list',{pagetitle : "Host Homes",registeredhomes : registeredhomes});
  });
};

exports.geteditordeletehome=(req,res,next)=>{
  const homeid=req.params.homeid;
  const editing=req.query.editing ==='true';
  const deletee=req.query.delete ==='true'
  if(editing){
    home.findbyID(homeid,home=>{
    if(!home){
      console.log("Home not found");
      return res.redirect('/host/host-homes');
    }
    res.render('host/edit-home',{pagetitle : "Add Home",home:home,editing:editing});
  });
  }
  if(deletee){
    home.deletebyid(homeid);
    res.redirect('/host/host-homes');
  }
  
}

exports.postedithome=(req,res,next)=>{
  const homes=new home(req.body.homename,req.body.location,req.body.price,req.body.rating,req.body.imageurl,req.body.id);
  homes.id=req.body.id;
  homes.save();
  res.redirect('/host/host-homes');
};