const db = require('../../database/models');
const Op = db.Sequelize.Op;

const products = db.Products

const productsControllers = {
    list: (req, res) => {
        products.findAll({
            include: [{ association: 'Categories' }]
        })
            .then(data => {
                const datamap = data.map((element) => {
                    return {
                        id: element.id,
                        name: element.name,
                        description: element.description,
                        category: element.Categories,
                        detail: `/api/products/${element.id}`
                    };
                });

                const result = datamap.reduce((acc, item) => {
                    if (!acc[item.category.name]) {
                        acc[item.category.name] = 1;
                    } else {
                        acc[item.category.name]++;
                    }
                    return acc;
                }, {});

                const countByCategory = Object.entries(result).map(([name, cantidad]) => ({ name, cantidad }));



                res.json({
                    status: 200,
                    count: data.length,
                    countByCategory: countByCategory,
                    data: datamap

                })
            })
            .catch(err => { res.json(err) })
    },
    detail: (req, res) => {
        products.findByPk(req.params.id, { include: [{ association: 'Categories' }] })
            .then(data => {
                res.json({
                    id: data.id,
                    name: data.name,
                    description: data.description,
                    price: data.price,
                    image: `/img/${data.image}`,
                    category: [data.Categories]
                });
            })
            .catch(err => { res.json(err) })
    },
    newProduct: (req, res) => {
        products.findOne({
             order: [['id', 'DESC']],
             include: [{ association: 'Categories' }],
            })
            .then(element => {
                res.json({
                    id: element.id,
                    name: element.name,
                    description: element.description,
                    price: element.price,
                    image: `/img/${element.image}`,
                    category: [element.Categories]
                });
            })
            .catch(err => { res.json(err) })
    },
    page: (req, res) => {
        const page = parseInt(req.params.page) || 1;
        const perPage = 10;
        const offset = (page - 1) * perPage;
        products.findAll({
            limit: perPage,
            offset: offset,
            include: [{ association: 'Categories' }]
        })
            .then(result => {
                const products = result;
                const count = result.count;
                const previousPage = (page - 1);
                const nextPage = (page + 1);

                res.json({
                    status: 200,
                    count: count,
                    currentPage: page,
                    previousPage: previousPage ? `/api/products/page/${previousPage}` : null,
                    nextPage: nextPage ? `/api/products/page/${nextPage}` : null,
                    data: products
                });
            })
            .catch(err => { res.json(err) })
    },
    productSearch: (req, res) => {
        const { name } = req.query
        products.findOne({
            where: { name: { [Op.like]: `%${name}%` } },
            include: [{ association: 'Categories' }]
        })
            .then(oneproduct => {
                res.json(oneproduct)
            })
            .catch(err => { res.json(err) })
    },
}

module.exports = productsControllers;