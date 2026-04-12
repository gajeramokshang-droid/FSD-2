// write an express js to link html , css and js file and show one image o.jpg. And also show the description of image.

const express=require("express");
const app=express();
const path=require("path");

app.use(express.static(path.join(__dirname)));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"jesus.html"))
});

app.listen(30000);
