const index = (req,res) => {
    res.render('index');
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
