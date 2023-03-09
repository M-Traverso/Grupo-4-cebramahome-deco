const { check } = require('express-validator');

const validate = [
    check('name').notEmpty().withMessage('nombre is required'),
    check('price').notEmpty().withMessage('precio is required'),
    check('category').notEmpty().withMessage('categoria is required'),
    check('description').notEmpty().withMessage('descripcion is required'),
    

]


module.exports=validate;