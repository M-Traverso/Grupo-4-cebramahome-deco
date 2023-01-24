const express=require('express');
const morgan = require('morgan');
const routerMain = require('./src/routes/main');

const port = process.env.PORT || 8080;

const app= express();

app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.static('public'));

app.use(routerMain);

app.listen(port,()=>console.log(`LISTENING ON PORT ${port}`));



