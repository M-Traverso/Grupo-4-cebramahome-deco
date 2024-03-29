const categorias = require('../data/categories');
const path=require('path');
const fs = require('fs');
const Product = require('../../models/Products');
const db = require('../database/models');

const productsPath = path.join(__dirname, '../data/MOCK_DATA.json');
let productos = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));

// HOME

const index = (req, res) => {
    db.Products.findAll()
    .then((productos) => {
        db.Categories.findAll()
            .then((categorias) => {
                res.render('index', { 'productos': productos, 'categorias': categorias });
            });
    });
 
};

// // Root - Show all products
// const allproducts = (req, res) => {
//     res.render(path.join(__dirname, ('../../views/products.ejs')), { 'productos': productos });
// }

// //PRODUCT DETAIL
// const productdetail = (req, res) => {
//     const { id } = req.params;
//     const oneproduct = productos.find(e => e.id == id);
//     if (oneproduct) {
//         res.render(path.join(__dirname, ('../../views/productdetail.ejs')), { oneproduct })
//     }
// }
// //PRODUCT CREATE
// const create = (req, res) => {
//     res.render(path.join(__dirname, ('../../views/productcreate.ejs')));
// }
// //PRODUCT STORE
// const store = (req, res) => {
//     if (req.file) {
//         const {
//             name,
//             price,
//             category,
//             description,
//         } = req.body;

//         const newId = productos[productos.length - 1].id + 1;
//         const image = req.file.filename;

//         const obj = {
//             id: newId,
//             name,
//             price,
//             category,
//             description,
//             image
//         };
//         if (productos == "") {
//             let productos = []
//         } else {
//             productos
//         }
//         productos.push(obj);
//         productsDataBasejson = JSON.stringify(productos);
//         fs.writeFileSync(productsPath, productsDataBasejson)
//         res.redirect('/products');
//     } else {
//         res.render(path.join(__dirname, ('../../views/productcreate.ejs')))
//     }
// }

// //PRODUCT EDIT

// const edit = (req, res) => {
//     const { id } = req.params;

//     const productToEdit = productos.find(elem => elem.id == id);

//     res.render(path.join(__dirname,'../../views/product-edit-form'),{'productos': productToEdit})

// };

// const update = (req, res) => {

    

//     productos.forEach(elem => {

//         if (elem.id == req.body.id) {
//             elem.name = req.body.name;
//             elem.price = req.body.price;
//             elem.description = req.body.description;
//             elem.Category = req.body.Category
//         }        
//     });

//     fs.writeFileSync(Product.fileName, JSON.stringify(productos,null,' '));

//     res.redirect('/products');
// }

// //PRODUCT DELETE


// const destroy = (req, res) => {
//     const {id} = req.params;

//     deleteProduct = productos.filter(elem => elem.id == id);

//     productos = productos.filter(elem => elem.id != id);    

//     console.log(deleteProduct);

//     fs.writeFileSync(Product.fileName, JSON.stringify(productos,null,' '));

//     fs.appendFileSync(path.join(__dirname,('../database/DELETED_PRODUCTS.json')), JSON.stringify(deleteProduct,null,' '));

//     res.redirect('/products');
// }

module.exports = {
    index,
    // productdetail,
    // allproducts,
    // create,
    // store,
    // edit,
    // update,
    // destroy
};
