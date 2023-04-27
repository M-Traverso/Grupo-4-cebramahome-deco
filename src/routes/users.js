const express = require('express');
const multer = require('multer')
const path = require('path')
const { check } = require('express-validator');
const guestMiddleware = require('../../middlewares/guestMiddleware');
const authtMiddleware = require('../../middlewares/authMiddleware');
const usersController = require('../controllers/usersControllers');
const userlogged = require('../../middlewares/userlogged');


//configurando storage
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        let folder = path.join(__dirname, '../../public/img/users');
        callback(null, folder);
    },
    filename: (req, file, callback) => {
        const imagename = Date.now() + path.extname(file.originalname)
        callback(null, imagename)
    }
})
let upload = multer({ storage })

const routerUsers = express.Router();


const validateRegister = [
    check('firstName').notEmpty().withMessage('introduzca su nombre').isLength({min:2}).withMessage('debe tener al menos 2 caracteres'),
    check('email').notEmpty().withMessage('introduzca su correo electronico').bail().isEmail().withMessage('introduzca un formato de correo valido'),
    check('password').notEmpty().withMessage('introduzca su contraseña').isLength({min:8}).withMessage('debe tener al menos 8 caracteres'),
    check('lastName').notEmpty().withMessage('introduzca su apellido').isLength({min:2}).withMessage('debe tener al menos 2 caracteres'),
    check('image').custom((value, { req }) => {

        let file = req.file;
        let acceptedExtencions = ['.jpg', '.png', '.gif', '.webp']

        if (!file) {
            throw new Error('tienes que subir una imagen');
        } else {
            let fileExtencion = path.extname(file.originalname)
            if (!acceptedExtencions.includes(fileExtencion)) {
                throw new Error(`las extenciones permitidas son ${acceptedExtencions.join(',')}`);
            }
        }
        return true;

    })
]


routerUsers.get('/user/:id', usersController.detail);
routerUsers.get('/user/:id/edit', usersController.edit);
routerUsers.put('/user/:id/edit', upload.single('image'), validateRegister, usersController.update);

routerUsers.get('/register', guestMiddleware, usersController.register);
routerUsers.post('/register', upload.single('image'), validateRegister, usersController.registerpost);


routerUsers.get('/login', guestMiddleware, usersController.login);
routerUsers.post('/login', usersController.loginpost);

// routerUsers.get('/cart', authtMiddleware, usersController.cart);

// Logout

routerUsers.get('/logout', usersController.logout);

module.exports = routerUsers;