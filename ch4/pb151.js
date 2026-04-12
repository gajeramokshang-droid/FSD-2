// using Express js make student information form only two fileds like name and mobile no and send data on console after submitting 
// "submit" button

const express=require("express")
const app=express();

app.use(express.urlencoded({extended:true}));

app.get('/form',(req,res)=>{
    res.send(`<form action="/submit" method="post">
                <input type="text" name="username" placeholder="Enter your name"/>
                <input type="number" name="phonenumber" placeholder="Enter your phone-number:"/>
                <button type="submit">Submit</button>
                </form>`);
});

app.post("/submit",(req,res)=>{
    const username=req.body.username;
    const number=req.body.phonenumber;
    res.send(`Usernae ${username} number ${number}`)
})

app.listen(10000);

