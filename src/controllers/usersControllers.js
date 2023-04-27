const categorias = require('../data/categories');
const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
// const User = require('../../models/Users');
// const usersPath = path.join(__dirname, '../data/USERS_DATA.json');
// const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
const bcryptjs = require('bcryptjs');
const db = require('../database/models');
const Op = db.Sequelize.Op;

const Users = db.User;

const usersController = {

// DETAIL

   detail: (req,res) => {
    Users.findByPk(req.params.id,{
        include:['products']
    }).then(oneUser => {
        res.render(path.join(__dirname, ('../../views/userDetail.ejs')), { oneUser })
    })
    .catch((error) => {
        res.send(error);
    })  

   },

// REGISTER

    register: (req, res) => {
    res.render('register');
},

// REGISTER POST

    registerpost: (req, res) => {

    const errors = validationResult(req);

    if (errors.isEmpty()) {
        const {email} = req.body;

        Users.findOne({
            where: { email: { [Op.like]: `%${email}%` } }
        }).then(userindb => {
            if(userindb){
                return res.render(path.join(__dirname, ('../../views/register.ejs')), { errors: { email: { msg: 'este email ya se registró' } }, old: req.body });
            }else{

                let usertocreate = {
                    ...req.body,
                    password: bcrypt.hashSync(req.body.password, 10),
                }
                const avatar = req.file.filename;
                let newUser = {
                    avatar: avatar,
                    ...usertocreate
                }
            
                Users.create(newUser)
                .then(()=>res.status(200)
                .redirect('/login')).catch((error) => res.send(error));

            }
        });

    } else {
        res.render(path.join(__dirname, ('../../views/register.ejs')), { errors: errors.mapped(), old: req.body });
    }

},

// EDIT

   edit: (req, res) => {

    Users.findByPk(req.params.id)
    .then((userToEdit) => {
            res.render(path.join(__dirname, ('../../views/userEdit.ejs')), {userToEdit});
        })
        .catch((error) => {
            res.send(error);
        });
    },
    
    update: (req, res) => {

    const errors = validationResult(req);

    if (errors.isEmpty()) {

        const {id} = req.body;

    Users.update(
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            avatar: req.file.filename     
        },
        {
            where: {id: parseInt(id)}
        }
    ).then(() => res.status(200).redirect(`/user/${req.body.id}`)).catch((error) => res.send(error));
    }else{
        
        let userToEdit = req.body;

        res.render(path.join(__dirname, ('../../views/userEdit.ejs')), { errors: errors.mapped(), old: req.body, userToEdit});
    }   

   },

// LOGIN

    login: (req, res) => {
    res.render('login');
},

// LOGIN POST

    loginpost: (req,res) => {
    // let userToLogin = User.findByField('email', req.body.email);

    const {email} = req.body;

    Users.findOne({
        where: { email: { [Op.like]: `%${email}%` } }
    }).then(userindb => {
        if(userindb){

            let isOkPassword = bcryptjs.compareSync(req.body.password, userindb.password);
            if (isOkPassword){
                delete userindb.password;
                req.session.userLogged = userindb;
    
                if(req.body.recuerdo) {
                    res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 2})                
                }
    
               return res.redirect('/');
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
    });    

},




// Logout

    logout: (req, res) => {
    res.clearCookie('userEmail');
    req.session.destroy();
    return res.redirect('/login');
}

}

module.exports = usersController;