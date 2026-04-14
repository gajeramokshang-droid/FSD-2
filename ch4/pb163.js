// Write an ExpressJS application that creates an HTML form containing two text fields named name and age, along with a submit button. 
// When the user submits the form, the data should be sent using the GET method. After submission, the application should redirect to a new 
// page and display the message:"Hello <name>, your age is <age>", where the values are taken from the form input.

const express=require('express');
const app=express();

app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send(`<form  action='/submit'  method='post'>
               <input type="text" placeholder="Enter your name"  name='name'/>
               <input type='number' name='age' placeholder="Enter your age"/>
               <button type='submit'>Submit</button>
             </form>`);
});

app.post('/submit',(req,res)=>{
    name=req.body.name;
    age=req.body.age;
    res.send(`Hello ${name}, your age is ${age}`);
});

app.listen(900);