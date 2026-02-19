const express=require('express');
const path=require('path');
const controller=require('../views/controllers/home');
const controller2=require('../views/controllers/contact');

const userRoute=express.Router();
const { name } = require('ejs');

userRoute.get('/',controller.gethome);

userRoute.get('/contact-us',controller2.getcontact);

userRoute.post('/contact-us',controller2.getcontacted);

exports.userRoute=userRoute;