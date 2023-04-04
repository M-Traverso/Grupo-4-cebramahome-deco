const express = require('express');
const multer= require('multer');
const path= require('path');
const validate= require('../../middlewares/validation')
const routerMain = express.Router();

const productsController= require('../controllers/productsController')

//configurando storage
const storage= multer.diskStorage({
    destination: (req, file, callback) => {
        let folder=path.join(__dirname,'../../public/img');
        callback(null,folder);
    },
    filename: (req, file, callback)=> {
        const imagename = Date.now() + path.extname(file.originalname)
        callback(null,  imagename)
    }
})
let upload= multer({storage})

routerMain.get('/products', productsController.allproducts);

routerMain.get('/products/category/:id', productsController.productsbycategory);

routerMain.get('/search', productsController.productSearch);
routerMain.get('/product/:id', productsController.productDetail);


routerMain.get('/products/create', productsController.productCreate);
routerMain.post('/products/create', upload.single('image'),validate, productsController.productStore);

routerMain.get('/products/:id/edit', productsController.productEdit);
routerMain.put('/products/:id/edit',upload.single('image'),validate,productsController.productUpdate);

routerMain.delete('/products/:id', productsController.productDestroy); 


module.exports = routerMain;