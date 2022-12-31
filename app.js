const express=require('express');
const path=require('path');
const app= express();

app.listen(3000,()=>console.log("LISTENING ON PORT 3000"));

app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'./views/index.html')))

app.get('/register.html',(req,res)=>res.sendFile(path.join(__dirname,'./views/register.html')))

app.use(express.static(path.resolve(__dirname,'./public')))