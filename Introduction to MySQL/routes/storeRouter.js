const express=require('express');
const controller=require('../views/controllers/storeController');

const storeRouter=express.Router();

storeRouter.get('/',controller.getindex);

storeRouter.get('/home',controller.gethome);

storeRouter.get('/contact-us',controller.getcontact);

storeRouter.post('/contact-us',controller.getcontacted);

storeRouter.get('/bookings',controller.getbooking);

storeRouter.get('/home/:homeid',controller.posthomedetails);

storeRouter.get('/favourites/:favid',controller.getfavouritesid);

storeRouter.get('/favourites/',controller.getfavourites);

storeRouter.get('/store/:homeid',controller.removehome);

storeRouter.get('/contact/:homeid',controller.getcontactdetails);

exports.storeRouter=storeRouter;