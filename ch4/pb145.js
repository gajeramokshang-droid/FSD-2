// write an express.js script to print "hello World" also run on 4000
const express=require("express");
const app=express();

app.get('/',(req,res)=>{
    res.send("Hello world")
});


app.listen(4000,()=>{
    console.log("Server running on http://localhost:4000");
})