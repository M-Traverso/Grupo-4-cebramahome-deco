const express = require('express');
const router = express.Router();
const productsController=require('../controllers/products');

router.get('/',productsController.list);
router.get('/search',productsController.productSearch);
router.get('/detail',productsController.newProduct);
router.get('/:id',productsController.detail);
router.get('/page/:page',productsController.page);


module.exports=router