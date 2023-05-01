const express = require('express');
const router = express.Router();
const usersAPIController = require('../../api/controllers/usersAPIController');

//Rutas
//Listado de todos los actores
router.get('/users', usersAPIController.list);
//Detalle del actor
router.get('/user/:id', usersAPIController.detail);
//En que peliculas trabajo el actor con id tal
router.get('/:id/movies', usersAPIController.usersPurch);

//Agregar un actor
router.post('/users/create', usersAPIController.create);
//Modificar un actor
router.put('/users/update/:id', usersAPIController.update);
//Eliminar un actor
router.delete('/users/delete/:id', usersAPIController.destroy);

module.exports = router;