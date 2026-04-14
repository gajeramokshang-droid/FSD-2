// Write an expressJS code which loads login.html file upon browsing localhost:3010. 
// The Login.html file contains input for username,password and two checkboxes named remember and subscribe,on submitting the file it 
// should go to /data page where username,password and selected checkboxes are pinted,in addition to that a logout button should be there,
// onclicking this button it should go back to home page “localhost:3010/”.(GET/POST any method can be used)[Write all necessary files code]
// 5


const express=require('express');
const app=express();

app.use(express.urlencoded({extended:true}));

app.get("/login.html",(req,res)=>{
    res.send(`<form action="/data" method='post'>
               <input type='text' name='name' placeholder="Enter your's"/>
               <input type="password" name='password'/>
               <input type='checkbox' name='jesus' value='remember'>remember
               <input type='checkbox' name='jesus' value='subscribe'>subscribe
                 <button type="submit">Submit</button>
        </form>`);
});


app.post('/data',(req,res)=>{
    const name=req.body.name;
    const pass=req.body.password;
    const check=req.body.jesus;
    res.send(`${name},${pass},${check},
        <form action="/login.html" method='get'>
        <button type='submit'>Logout</button>
        </form>
        `)
});

app.listen(1000);