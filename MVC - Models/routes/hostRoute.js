const express=require('express');
const path=require('path');
const controller=require('../views/controllers/host');

const hostRoute=express.Router();

hostRoute.get('/host/add-home',controller.getAdd_home);


hostRoute.post('/host/add-home',controller.postAdd_home);

exports.hostRoute=hostRoute;
