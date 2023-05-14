const express = require('express');
const router = express.Router();
const usersController=require('../controllers/users');

router.get('/',usersController.list);
router.get('/:id',usersController.detail);
router.get('/page/:page',usersController.page);


module.exports=router