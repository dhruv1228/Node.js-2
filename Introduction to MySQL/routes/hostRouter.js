const express=require('express');
const controller=require('../views/controllers/hostController');

const hostRouter=express.Router();

hostRouter.get('/host/add-home',controller.getaddhome);

hostRouter.post('/host/add-home',controller.postaddhome);

hostRouter.get('/host/host-homes',controller.gethosthomes);

hostRouter.get('/host/:homeid',controller.geteditordeletehome);

hostRouter.post('/host/edit-home',controller.postedithome);

exports.hostRouter=hostRouter;