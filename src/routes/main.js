const express = require('express');
const multer= require('multer')
const path= require('path')
const{index,productdetail,allproducts,create,store,edit,update,destroy} = require('../controllers/mainControllers');



const routerMain = express.Router();

routerMain.get('/', index);


module.exports = routerMain;