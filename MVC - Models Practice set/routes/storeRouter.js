const express=require('express');
const path=require('path');
const controller=require('../views/controllers/home');


const storeRouter=express.Router();
const { name } = require('ejs');

storeRouter.get('/',controller.getindex);

storeRouter.get('/home',controller.gethome);

storeRouter.get('/contact-us',controller.getcontact);

storeRouter.post('/contact-us',controller.getcontacted);

storeRouter.get('/bookings',controller.getbooking);
//
storeRouter.get('/favourites',controller.getfavourites);


module.exports=storeRouter;