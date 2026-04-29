

const express=require('express');
const app=express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('fourth',{name:"Xavier"});
});
app.listen(3800);

