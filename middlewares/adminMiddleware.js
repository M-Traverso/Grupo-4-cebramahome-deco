function adminMiddleware(req,res,next){
    if(req.session.userLogged.email != 'manuel.traverso@gmail.com'){
        return res.redirect('/');
    }
    next();
}

module.exports = adminMiddleware;