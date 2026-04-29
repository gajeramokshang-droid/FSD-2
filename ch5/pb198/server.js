
const express=require("express");
const app=express();
const path=require('path');
const session=require('express-session');

app.use(express.static(path.join(__dirname)));
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
}));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
});

app.post('/submit',(req,res)=>{
    req.session.username=req.body.username;
    req.session.password=req.body.pass;
    req.session.jesus=req.body.jesus;
    res.redirect('/fetchsession');
});

app.get('/fetchsession',(req,res)=>{
    if(req.session.username){
        res.send(`Welcome ${req.session.username} <br> Your password is ${req.session.password} 
            <br> Your checkbox value is ${req.session.jesus} <br><a href="/logout">Logout</a>`);
           
    }
    else{
        res.redirect('/');
    }
});

app.get('/logout',(req,res)=>{
    req.session.destroy();
    res.redirect('/');
});

app.listen(3000);

