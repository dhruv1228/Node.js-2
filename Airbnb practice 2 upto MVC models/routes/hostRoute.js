const express=require('express');
const controller=require('../controllers/host');

const hostRouter=express.Router();

hostRouter.get('/host/add-home',controller.getaddhome);

hostRouter.post('/host/add-home',controller.postaddhome);

exports.hostRouter=hostRouter;