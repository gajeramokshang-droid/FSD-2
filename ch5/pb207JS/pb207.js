// Write an ExpressJS script to perform the following tasks:Create one HTML file that contains:
// Product Price (number input)Discount Percentage (number input)One dropdown (Festival Offer, Seasonal Offer, Clearance Sale)
// One submit buttonValidation Rules:Price and Discount must be greater than 0Otherwise display message:"Enter valid price and 
// discount"User must select an offer from dropdownOtherwise display:"Please select an offer type"(Messages will be displayed on 
// /discount page)

const { off } = require('cluster');
const express=require('express');
const app=express();
const path=require('path');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname)));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'server.js'))
});

app.post('/submit',(req,res)=>{
    const price=req.body.Price;
    const discount=req.body.Percentage;
    const offers=req.body.offers;
    if(price<0||discount<0){
        res.send('Enter valid price and discount');
    }
    if(offers<0){
        res.redirect('/discount');
    }
});

app.get('/discount',(req,res)=>{
    res.send("Please select an offer type");
});

app.listen(1000)