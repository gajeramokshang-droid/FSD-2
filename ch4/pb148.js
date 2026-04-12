// write an express.js to implement a form that allows users to submit data via POST request.
//  Write code to create a route that handles the POST request and logs the submitted data to the console.

const express=require("express");
const app=express();

app.use(express.urlencoded({ extended: true }));

app.get("/form",(req,res)=>{
    res.send(`<form action="/submit" method="post">
                <input type="text" name="username" placeholder="Enter your name"/>
                <button type="submit">Submit</button>
                </form>`);
});

app.post("/submit",(req,res)=>{
    const {username}=req.body
    res.send(`${username}`)
})

app.listen(300,()=>{
    console.log(`http://localhost:300`)
})

// That line is very important when you’re working with HTML forms in Express: