// write express script to maintain session and print how many times user visit the page.
// For ex., if user visit first time ,”you have visited page First time” message will print.
//  if user visit second time ,”you have visited page second time” message will print. and so on.

const express=require("express")
const app=express();
const session = require("express-session");

app.use(session({
  secret: "secretKey123",   // change this in production
  resave: false,
  saveUninitialized: true
}));

app.get('/',(req,res)=>{
    if(req.session.visits){
        req.session.visits++;
        res.send(`You have visited this page ${req.session.visits} times.`);
}
else{
    req.session.visits=1;
    res.send("You have visited this page for the first time.");
}})

app.listen(3000,()=>{
    console.log(`http://localhost:3000`)
});
 
