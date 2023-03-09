const categorias = require('../data/categories');
const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('../../models/Users');
const usersPath = path.join(__dirname, '../data/USERS_DATA.json');
const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
const bcryptjs = require('bcryptjs');




// REGISTER

const register = (req, res) => {
    res.render('register');
};

// REGISTER POST

const registerpost = (req, res) => {

    const errors = validationResult(req)


    let findByfield = function (field, text) {
        let allusers = users
        let userFound = allusers.find(e => e[field] === text)
        return userFound;
    }



    if (errors.isEmpty()) {

    } else {
        console.log(errors)
        res.render(path.join(__dirname, ('../../views/register.ejs')), { errors: errors.mapped(), old: req.body });
    }
    let userindb = findByfield('email', req.body.email);

    if (userindb) {
        return res.render(path.join(__dirname, ('../../views/register.ejs')), { errors: { email: { msg: 'este email ya se registró' } }, old: req.body });
    }



    let usertocreate = {
        ...req.body,
        password: bcrypt.hashSync(req.body.password, 10),
    }
    const newId = users[users.length - 1].id + 1;
    const avatar = req.file.filename;

    let newuser = {
        id: newId,
        avatar: avatar,
        ...usertocreate
    }
    users.push(newuser);
    fs.writeFileSync(usersPath, JSON.stringify(users, null, " "))



    return res.redirect('/login')



};

// LOGIN

const login = (req, res) => {
    res.render('login');
};

// LOGIN POST

const loginpost= (req,res) => {
    let userToLogin = User.findByField('email', req.body.email);
    
    if(userToLogin){

        let isOkPassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
        if (isOkPassword){
            delete userToLogin.password;
            req.session.userLogged = userToLogin;

            if(req.body.recuerdo) {
                res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 2})                
            }

            res.redirect('/');
        }
        return res.render('login',{
            errors: {
                email: {
                    msg:'Las credenciales son invalidas'
                }              
            }
    
        });
    }

    return res.render('login',{
        errors: {
            email: {
                msg: 'Debes registrarte antes de loguearte'
            }
        }

    });
};

// PURCHASE CART

const cart = (req, res) => {
    res.render('cart');
};

// Logout

const logout = (req, res) => {
    res.clearCookie('userEmail');
    req.session.destroy();
    return res.redirect('/login');
}

module.exports = {
    register,
    login,
    cart,
    registerpost,
    loginpost,
    logout
}