const homee=require('../../models/homes');
const home=require('../../models/homes');

exports.getaddhome=(req,res,next)=>{
  res.render('host/edit-home',{pagetitle : "Add Home",editing :false});
};

exports.postaddhome=(req,res,next)=>{
  console.log(req.body);
  const homes=new home(req.body.homename,req.body.location,req.body.price,req.body.rating,req.body.number,req.body.imageurl,req.body.description);
  homes.save().then(()=>{
res.render('host/homeAdded',{pagetitle : "Home Added"});
  });
  
};


exports.gethosthomes=(req,res,next)=>{
  homee.fetchAll().then(([registeredhomes])=>{
    res.render('host/host-home-list',{pagetitle : "Host Homes",registeredhomes : registeredhomes});
  });
};

exports.geteditordeletehome=(req,res,next)=>{
  const homeid=req.params.homeid;
  const editing=req.query.editing ==='true';
  const deletee=req.query.delete ==='true'
  if(editing){
    homee.fetchAll().then(([home])=>{
    const homes=home[0];
    if(!homes){
      console.log("Home not found");
      return res.redirect('/host/host-homes');
    }
    res.render('host/edit-home',{pagetitle : "Add Home",home:homes,editing:editing});
  });
  }
  if(deletee){
    home.deletebyid(homeid);
    res.redirect('/host/host-homes');
  }
  
}

exports.postedithome=(req,res,next)=>{
  const homes=new home(req.body.homename,req.body.location,req.body.price,req.body.rating,req.body.number,req.body.imageurl,req.body.description,req.body.id);
  homes.save().then(()=>{
    res.redirect('/host/host-homes');
  });
};