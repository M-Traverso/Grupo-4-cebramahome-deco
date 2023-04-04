
const path = require('path');
const fs = require('fs');

const usersPath = path.join(__dirname, '../src/data/USERS_DATA.json');
const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));





function userlogged(req,res,next){

    res.locals.isLogged = false;

    let findByfield = function (field, text) {
        let allusers = users
        let userFound = allusers.find(e => e[field] === text)
        return userFound;
    }

    let emailIncookie=req.cookies.useremail;
    let userFromCookie=findByfield('email',emailIncookie);
    

    if ( userFromCookie) {
        req.session.userlogged=userFromCookie
    }

    if(req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

    

    next()
}



module.exports= userlogged;