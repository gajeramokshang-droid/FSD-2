const express=require("express");
const path=require('path');
const app=express();

const csspath=path.join(__dirname,"../css");
const htmlpath=path.join(__dirname,'../HTML');
const imgpath=path.join(__dirname,'../Image');

app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname)));
app.use(express.static(csspath));
app.use(express.static(htmlpath,{index:'home.html'}));
app.use(express.static(imgpath));

app.listen(3000,()=>{
    console.log(`http://localhost:3000`)
});

