function adminMiddleware(req,res,next){
    if(req.session.userLogged.email != 'manuel.traverso@gmail.com'){
        console.log(req.session.userLogged.email)
        return res.redirect('/');
    }
    next();
}

module.exports = adminMiddleware;