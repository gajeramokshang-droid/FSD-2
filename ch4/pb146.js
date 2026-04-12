// write an express.js script to use of routing method using home , about , contact , temp page and print message.
//  /home- welcome to my home page , /about -welcome to my about page, /contact-welcome to my contact page ,/temp - welcome to my temp page

const express=require("express");
const app=express();

app.get("/home",(req,res)=>{
    res.send("welcome to my home page")
});

app.get("about",(req,res)=>{
    res.send('welcome to my about page');
});

app.get("contact",(req,res)=>{
    res.send('welcome to my contact page');
});

app.get("temp",(req,res)=>{
    res.send("welcome to my temp page")
});

app.listen(1000,()=>{
    console.log("Server running on http://localhost:1000");
})