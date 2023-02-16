const categorias = require('../database/categories');
const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const usersPath = path.join(__dirname, '../database/USERS_DATA.json');
const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));




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

const loginpost = (req, res) => {

    //una vez que validas que el usuario esta logueado ,esto hacelo con una constante
    //userTologin ahi pones el codigo este que pongo abajo
    req.session.userLogged = userTologin;
    if (req.body.recuerdo) {
        res.cookie('useremail', req.body.email, { maxAge: (1000 * 60) * 2 })
    }
};


// PURCHASE CART

const cart = (req, res) => {
    res.render('cart');
};

module.exports = {
    register,
    login,
    cart,
    registerpost,
    loginpost
}