const db = require('../database/models');
const Op = db.Sequelize.Op;
const { validationResult } = require('express-validator');
const path = require('path');


const productsController = {
    allproducts: (req, res) => {
        db.Products.findAll({
            include: [{ association: 'Categories' }]
        })
            .then(productos => {
                res.render(path.join(__dirname, ('../../views/products.ejs')), { 'productos': productos });
            })
            .catch((error) => {
                res.send(error);
            })

    },
    productSearch: (req, res) => {
        const { name } = req.query
        db.Products.findOne({
            where: { name: { [Op.like]: `%${name}%` } }
        })
            .then(oneproduct => {
                res.render(path.join(__dirname, ('../../views/productdetail.ejs')), { 'oneproduct': oneproduct })
            })
            .catch((error) => {
                res.send(error);
            })
    },
    productsbycategory: (req, res) => {
        db.Products.findAll({
            where: { category_id: req.params.id }
        }, {
            include: [{ association: 'Categories' }]
        })
            .then((productos) => {
                res.render(path.join(__dirname, ('../../views/productsbycategory.ejs')), { 'productos': productos })
            })

    },
    productDetail: (req, res) => {
        db.Products.findByPk(req.params.id)
            .then(oneproduct => {
                res.render(path.join(__dirname, ('../../views/productdetail.ejs')), { oneproduct })
            })
            .catch((error) => {
                res.send(error);
            })
    },
    productCreate: (req, res) => {

        db.Categories.findAll()
            .then(categorias => {
                res.render(path.join(__dirname, ('../../views/productcreate.ejs')), { 'categorias': categorias });
            })
            .catch((error) => {
                res.send(error);
            })
    },
    productStore: (req, res) => {
        const errors = validationResult(req)
        let profileImage = req.file && req.file.filename;
        if (!profileImage) {
            profileImage = '../../img/default.png';
        }

        if (errors.isEmpty()) {

            db.Products.create({
                id: null,
                name: req.body.name,
                price: req.body.price,
                category_id: req.body.category,
                description: req.body.description,
                image: profileImage
            })
                .then(() => {
                    res.redirect('/products');
                })
                .catch((error) => {
                    res.send(error);
                })
        } else {
            db.Categories.findAll()
                .then(categorias => {
                    res.render(path.join(__dirname, ('../../views/productcreate.ejs')), { errors: errors.mapped(), old: req.body, categorias: categorias });
                })
                .catch((error) => {
                    res.send(error);
                })
        }

    },
    productEdit: (req, res) => {
        let productos = db.Products.findByPk(req.params.id)
        let categorias = db.Categories.findAll()

        Promise.all([productos, categorias])
            .then(([productos, categorias]) => {
                res.render(path.join(__dirname, ('../../views/product-edit-form.ejs')), { productos: productos, categorias: categorias });
            })
            .catch((error) => {
                res.send(error);
            })
    },
    productUpdate: (req, res) => {
        const errors = validationResult(req)
        const x = db.Products.findAll()
        const existingImage = x.image;
        const image = req.file && req.file.filename


        if (errors.isEmpty()) {

            db.Products.update({
                name: req.body.name,
                price: req.body.price,
                category_id: req.body.category,
                description: req.body.description,
                image: image || existingImage
            }, {
                where: { id: req.params.id }
            })
                .then(() => {
                    res.redirect('/products');
                })
                .catch((error) => {
                    res.send(error);
                })
        } else {
            let productos = db.Products.findByPk(req.params.id)
            let categorias = db.Categories.findAll()

            Promise.all([productos, categorias])
                .then(([productos, categorias]) => {
                    res.render(path.join(__dirname, ('../../views/product-edit-form.ejs')), { errors: errors.mapped(), old: req.body, 'productos': productos, 'categorias': categorias });
                })
                .catch((error) => {
                    res.send(error);
                })
        }


    },
    productSoftDelete: (req, res) => {
        db.Products.destroy({
            where: { id: req.params.id }
        })
            .then(() => {
                res.redirect('/products')
            })
            .catch((error) => {
                res.send(error);
            })
    },
    productDestroy: (req, res) => {
        db.Products.destroy({
            where: { id: req.params.id }, force: true
        })
            .then(() => {
                res.redirect('/products')
            })
            .catch((error) => {
                res.send(error);
            })
    }
}
module.exports = productsController