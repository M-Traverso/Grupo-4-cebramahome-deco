
const path = require('path');
const fs = require('fs');

const db = require('../src/database/models');
const Op = db.Sequelize.Op;

const Users = db.User;

// const usersPath = path.join(__dirname, '../src/data/USERS_DATA.json');
// const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));


function userlogged(req,res,next){

    res.locals.isLogged = false;

    const email = req.cookies.userEmail;

    Users.findOne({
        where: { email: { [Op.like]: `%${email}%` } }
    })
        .then(oneUser => {
            if (oneUser) {
                req.session.userlogged=oneUser
            }

            if(req.session.userLogged){
                res.locals.isLogged = true;
                res.locals.userLogged = req.session.userLogged;
            }

            next()
        })
        .catch((error) => {
            res.send(error);
        })

}



module.exports= userlogged;