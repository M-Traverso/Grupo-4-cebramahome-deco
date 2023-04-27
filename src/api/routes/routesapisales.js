const express = require('express');
const router = express.Router();
const apiSalesController=require('../controllers/controllerapisales');


router.post('/create',apiSalesController.create);

module.exports = router;