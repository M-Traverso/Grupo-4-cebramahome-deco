const express = require('express');
const{index, register, login, cart} = require('../controllers/mainControllers');


const routerMain = express.Router();

routerMain.get('/', index);

routerMain.get('/register', register);

routerMain.get('/login', login);

routerMain.get('/cart', cart);

module.exports = routerMain;