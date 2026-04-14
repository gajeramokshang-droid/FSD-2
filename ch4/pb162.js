// Write an ExpressJS application that creates a login form containing fields for username and password along with a submit button. 
// The form data should be sent to the server using the POST method. Implement an authentication middleware that checks whether the entered
//  username is "admin" and the password is "1234". If the credentials are correct, the application should display the message "Login Successful". 
//  Otherwise, it should display "Invalid Credentials".

const express=require('express');
const app=express();

app.use(express.urlencoded({extended:true}));

app.get('/form',(req,res)=>{
    res.send(`<form action='/submit' method='post'>
        <input type='text' placehoder="Enter your name" name='name'/>
        <input type='password' name='pass' placeholder='enter yours passwword'/>
        <button type='submit'>Submit</button>
        </form>`);
});

app.post("/submit",(req,res)=>{
    if(req.body.name==='admin'&&req.body.pass==='1234'){
        res.send("Login successful");
    }
    else {
        res.send("Login failed: Invalid credentials");
    }
});

app.listen(20000);