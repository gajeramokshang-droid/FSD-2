
const express=require("express");
const app=express();

app.get("/home",(req,res)=>{
    res.send(`<h1 style="color:red";font-weight:"bold">Christ is the King</h1>
            <a href="/next">Go to the next page</a>`)
});

app.get("/next",(req,res)=>{
    res.send(`<h2> You are on next page Thnk you</h2>
        <a href="/home">Go back to the home page</a>`)
});

app.listen(300,()=>{
    console.log("Server rnning on http://localhost:300");
})

// app.get(path, callback)
// - path → The route (like /, /users, /about)
// - callback → Function that runs when someone visits that route

//  Express, app.get() is used to define routes that respond to HTTP GET requests — 

//  meaning it handles requests where the client wants to retrieve data (like loading a webpage or 
//     fetching information from a server).
