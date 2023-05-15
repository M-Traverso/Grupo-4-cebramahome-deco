const express = require('express');
const router = express.Router();
const apiemailController=require('../controllers/controllerEmailAlerts');


router.post('/create',apiemailController.create);

module.exports = router;