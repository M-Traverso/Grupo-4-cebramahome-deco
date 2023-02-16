
const path = require('path');
const fs = require('fs');

const usersPath = path.join(__dirname, '../src/database/USERS_DATA.json');
const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));





function userlogged(req,res,next){


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


    

    next()
}



module.exports= userlogged;