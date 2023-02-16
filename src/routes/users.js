const express = require('express');
const multer= require('multer')
const path= require('path')
const{index, register, login, cart} = require('../controllers/usersControllers');

const routerUsers = express.Router();

routerUsers.get('/', index);

routerUsers.get('/register', register);

routerUsers.get('/login', login);

routerUsers.get('/cart', cart);

module.exports = routerUsers;