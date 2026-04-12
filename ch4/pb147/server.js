// write an express.js script to make one index.html file in this file we write simple heading tag and make one css file 
// index.css put style using appropriate selector and link with js file and show output on localhost:3030.

const express=require("express");
const app=express();
const path=require("path");

app.use(express.static(path.join(__dirname)));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
});

app.listen(3030,()=>{
    console.log(`http://localhost:3030`)
})