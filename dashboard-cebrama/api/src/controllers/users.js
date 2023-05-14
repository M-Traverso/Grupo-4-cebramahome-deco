const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Users = db.User;
//---------------------------
//Dentro del actorsAPIController uso las dos forma de poder llamar a nuestros modelo
//----------------------------------
const usersAPIController = {
    list: (req, res) => {
        Users.findAll()
            .then(data => {

                res.json({
                    status: 200,
                    count: data.length,

                })
            })
            .catch(err => { res.json(err) })
    },
    
    detail: (req, res) => {
        products.findByPk(req.params.id)
            .then(data => {
                res.json({
                    id: element.id,
                    firstName: element.firstName,
                    lastName: element.lastName,
                    email: element.email,
                    password: element.password,
                    avatar: `/avatar/${data.avatar}`
                });
            })
            .catch(err => { res.json(err) })
    },
    page: (req, res) => {
        const page = parseInt(req.params.page) || 1;
        const perPage = 10;
        const offset = (page - 1) * perPage;
        Users.findAll({
            limit: perPage,
            offset: offset
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
                    previousPage: previousPage ? `/api/users/page/${previousPage}` : null,
                    nextPage: nextPage ? `/api/users/page/${nextPage}` : null,
                    data: products
                });
            })
            .catch(err => { res.json(err) })
    },
    create: (req,res) => {
        Users.create(
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                avatar: req.body.avatar
            }
        )
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/users/create'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/users/create'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
            console.log(req.body)
        })    
        .catch(error => res.send(error))
    },
    update: (req,res) => {
        let userId = req.params.id;
        Users.update(
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                avatar: req.body.avatar
            },
            {
                where: {id: userId}
        })
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/users/update/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'api/users/update/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    },
    destroy: (req,res) => {
        let userId = req.params.id;
        Users.destroy({
            where: {id: userId}, force: true
        }) // force: true es para asegurar que se ejecute la acción
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/users/delete/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'api/users/delete/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    }
    
}

module.exports = usersAPIController;