const express = require('express');
const multer = require('multer')
const path = require('path')
const { check } = require('express-validator');
const { register, login, cart, registerpost,loginpost, logout } = require('../controllers/usersControllers');
const guestMiddleware = require('../../middlewares/guestMiddleware');
const authtMiddleware = require('../../middlewares/authMiddleware');

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
    check('name').notEmpty().withMessage('introduzca su nombre'),
    check('email').notEmpty().withMessage('introduzca su correo electronico').bail().isEmail().withMessage('introduzca un formato de correo valido'),
    check('password').notEmpty().withMessage('introduzca su contraseña'),
    check('lastName').notEmpty().withMessage('introduzca su apellido'),
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


routerUsers.get('/register', guestMiddleware, register);
routerUsers.post('/register', upload.single('image'), validateRegister, registerpost);


routerUsers.get('/login', guestMiddleware, login);
routerUsers.post('/login', loginpost);

routerUsers.get('/cart', authtMiddleware, cart);

// Logout

routerUsers.get('/logout', logout);

module.exports = routerUsers;