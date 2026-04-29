// Write express js script to perform tasks as asked below. 1. Create one HTML file which contains two number type input fields,
//  one dropdown which contains options to select like (addition, subtraction, multiplication, division) and one submit button. 
//  2. The input fields must contain the value greater than 0 else it will give a message “Please enter the valid number”. Also, user 
//  must select any type of formula from the dropdown else give a message “You have not selected any formula”. (Message will be displayed 
//  'on “/calc” page.) 3. If one formula is selected and numbers are entered then Both numbers should be stored in cookies which expires
//  in 50 seconds. Respective calculations will be performed on the page “/calc”.

const { urlencoded } = require('body-parser');
const express=require('express');
const app=express();
const path=require('path');
cookie=require('cookie-parser');

app.use(cookie());

app.use(urlencoded({extended:true}));
app.use(express.static(path.join(__dirname)));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'server.html'));
});

app.post('/submit',(req,res)=>{
    const calc=req.body.calc;
    const no1=parseFloat(req.body.no1);
    const no2=parseFloat(req.body.no2);
    if(no1<0 || no2<0){
        res.send("Value must be greater than zero")
    }
    if(!calc){
        res.send("User must select any kinda formula");
    }
    
    res.cookie("calc",calc,{maxAge: 50*1000})
    res.cookie("no1",no1,{maxAge: 50*1000})
    res.cookie("no2",no2,{maxAge: 50*1000})
res.redirect("/jesus");
})

app.get('/jesus',(req,res)=>{
    const calc=req.cookies.calc;
    const no1=parseFloat(req.cookies.no1);
    const no2=parseFloat(req.cookies.no2);
let result;
  if(calc==='Addition'){
         result=parseFloat(no1)+parseFloat(no2)
      
    }
    else if(calc==='Subtraction'){
         result=no1-no2
     
    }
    else if(calc==='Multiplication'){
         result=no1*no2;
        
    }
    else if(calc==='Division'){
        const result=no1/no2;
        
    }
    else{
        res.send("Invalid Formula")
    }
     res.send(`
    <h2>Calculation Result</h2>
    <p>Formula: ${calc}</p>
    <p>Number 1: ${no1}</p>
    <p>Number 2: ${no2}</p>
    <p>Result: ${result}</p>
  `);
})
  


app.listen(2000)