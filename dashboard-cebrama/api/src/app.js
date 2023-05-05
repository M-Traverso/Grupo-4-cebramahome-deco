const express = require('express');
const path = require('path');
const app = express();
const db= require('../database/models');

const routesApi=require('./routes/productsRoutes');
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/api/products',routesApi)



db.sequelize.authenticate()
  .then(()=>{
    console.log('conexion a la base de datos ok')
  })
  .catch(error=>{
    console.log('el error es' +error)
  });
app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));