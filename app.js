const express=require('express');
const morgan = require('morgan');
const session=require('express-session');
const cookies=require('cookie-parser');
const routerMain = require('./src/routes/main');
const methodOverride =  require('method-override');
const userlogged=require('./middlewares/userlogged');
const routerUsers = require('./src/routes/users');

const port = process.env.PORT || 8080;

const app= express();

app.use(express.urlencoded({extended:false}));
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
app.use(routerUsers);

app.listen(port,()=>console.log(`LISTENING ON PORT ${port}`));



