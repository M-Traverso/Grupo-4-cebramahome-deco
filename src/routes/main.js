const express = require('express');
const multer= require('multer')
const path= require('path')
const{index, register, login, cart,productdetail,allproducts,create,store,edit,update,destroy} = require('../controllers/mainControllers');
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


const routerMain = express.Router();

routerMain.get('/', index);

routerMain.get('/register', register);

routerMain.get('/login', login);

routerMain.get('/cart', cart);

routerMain.get('/product/:id', productdetail);

routerMain.get('/products', allproducts);

routerMain.get('/products/create', create);
routerMain.post('/products',upload.single('image'), store);

routerMain.get('/products/:id/edit', edit);
routerMain.put('/products/:id', update);

routerMain.delete('/products/:id', destroy); 

module.exports = routerMain;