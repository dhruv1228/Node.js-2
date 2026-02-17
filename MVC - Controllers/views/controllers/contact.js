exports.getcontact=(req,res,next)=>{
  res.render('contactus',{pagetitle: 'Contact Us'});
};

exports.getcontacted=(req,res,next)=>{
  let customer={name:req.body.name,email:req.body.email};
  console.log(customer);
  res.render('contacted',{customer:customer,pagetitle:'Contact Us'});

};