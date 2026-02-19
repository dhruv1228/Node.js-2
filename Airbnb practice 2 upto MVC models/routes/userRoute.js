const express=require('express');
const controller=require('../controllers/user');

const userRouter=express.Router();

userRouter.get('/',controller.gethome);

userRouter.get('/contact-us',controller.getcontact);

userRouter.post('/contact-us',controller.postcontact);

userRouter.get('/bookings',controller.getbookings);

userRouter.get('/about-us',(req,res,next)=>{
  res.render('about',{ pagetitle : 'About'});
});

exports.userRouter=userRouter;