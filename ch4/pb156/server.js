
// Write an express js script to link html , css and js file to show message “LJ University with a difference” with font size 50px and color 
// “blue”.

const express=require("express");
const app=express();
const path=require('path')
app.use(express.static(path.join(__dirname)));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"jesus.html"));
});

app.listen(10000,()=>{
    console.log(`http://localhost:10000`)
});

