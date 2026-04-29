const express=require("express")
const app=express();
const session = require("express-session");
const path=require('path');

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname)));


app.use(session({
  secret: "secretKey123",   // change this in production
  resave: false,
  saveUninitialized: true
}));


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
});

app.post('/submit',(req,res)=>{
    req.session.username=req.body.username;
    res.redirect('/fetchsession'); 
});

app.get('/fetchsession',(req,res)=>{
    if(req.session.username){
        res.send(`Welcome ${req.session.username}
            <a href="/logout">Logout</a>`);
    }
    else{
        res.redirect('/'); 
    }
})

app.get('/logout',(req,res)=>{
    req.session.destroy();
    res.redirect('/');
});

app.listen(3000,()=>{
    console.log(`http://localhost:3000`)
});
