require('dotenv').config();
const express=require('express');
const morgan = require('morgan');
const session=require('express-session');
const cookies=require('cookie-parser');
const routerMain = require('./src/routes/main');
const methodOverride =  require('method-override');
const userlogged=require('./middlewares/userlogged');
const routerUsers = require('./src/routes/users');
const routerProducts = require('./src/routes/products');
const db= require('./src/database/models');
const routesapisales=require('./src/api/routes/routesapisales');
const routerAPIUsers=require('./src/api/routes/users');
const port = process.env.PORT || 8080;

const app= express();

app.use(express.urlencoded({extended:false}));
app.use(express.json())
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(session({secret:'secreto',
resave:false,
saveUninitialized:false
}))

app.use(cookies());
app.use(userlogged);

app.use(routerMain);
app.use(routerProducts);
app.use(routerUsers);
app.use('/api/sales',routesapisales);
app.use('/api',routerAPIUsers);


db.sequelize.authenticate()
  .then(()=>{
    console.log('conexion a la base de datos ok')
  })
  .catch(error=>{
    console.log('el error es' +error)
  });

app.listen(port,()=>console.log(`LISTENING ON PORT ${port}`));



