const categorias = require('../database/categories');
const productos = require('../database/products');

const index = (req,res) => {
    res.render('index',{'categorias': categorias,'productos': productos});
};

const register = (req,res) => {
    res.render('register');
};

const login = (req,res) => {
    res.render('login');
};

const cart = (req,res) => {
    res.render('cart');
};

module.exports = {
    index,
    register,
    login,
    cart
};
