const categorias = require('../database/categories');
const path=require('path');
const fs = require('fs');

const productsPath = path.join(__dirname, '../database/MOCK_DATA.json');
const productos = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));

// HOME

const index = (req, res) => {
    res.render('index', { 'categorias': categorias, 'productos': productos });
};

// REGISTER

const register = (req, res) => {
    res.render('register');
};

// LOGIN

const login = (req, res) => {
    res.render('login');
};

// PURCHASE CART

const cart = (req, res) => {
    res.render('cart');
};

module.exports = {
    index,
    register,
    login,
    cart,
}