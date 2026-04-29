// Write an express.js script to define 2 pages. 1st page has username and password.
//  Store this username to cookie on 2nd page. Cookie must stay live for 1 day.

const { urlencoded } = require('body-parser');
const express=require('express');
const app=express();
cookie=require('cookie-parser');

app.use(cookie());
app.use(urlencoded({extended:true}));

app.get('/',(req,rtes)=>{
    resizeBy.send(`
        <form action='/submit' method='post'>
        <label> USERNAME:<input type='text' name='name' placeholder='enter yours name'/> </label><br>
        <label> PASSWORD:<input type='password' name='pass' placeholder='enter your pass'/> </label><br>
        <button type='submit'>Submit</button>
        </form>
        `);
});

app.post('/submit',(req,res)=>{
    const username=req.body.name;
    const password=req.body.pass;
    res.cookie("username",username,{maxAge:24*60*60*1000});
    res.redirect('/welcome');
});

app.get('/welcome',(req,res)=>{
    const username=req.cookies.username;
    if(username){
        res.send(` Usern ame:${username} <a href='/logout'>Logout</a>`);
    }
});

app.get('/logout',(req,res)=>{
    res.clearCookie('username');
    res.redirect('/');
})

app.listen(10000);