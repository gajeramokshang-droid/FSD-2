const express=require("express");
const app=express();

const jesus=(req,res,next)=>{
    console.log(`Request body: ${req.method}, URL:${req.url}`);
    next();
}

const mathew=(req,res,next)=>{
    if(req.query.token==='123'){
        next();
    }
    else{
        res.send("Erorr in you mam");
    }
}

app.get('/secure',jesus,mathew,(req,res)=>{
     res.send("Access granted to secure route!");
});

app.listen(9000);