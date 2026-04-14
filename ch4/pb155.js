// Write an express.js script to define one JSON array of 3 objects having members ‘name’ and ‘score’. score must be sorted descending
//  order according to name.

const express=require('express');
const app=express();

const jesus=[
    {
        name:"JESUS",
        age:32
    },
    {
        name:"Jessica",
       age:20
    },
    {
        name:"Rachael",
       age:21
    }
]

app.get('/',(req,res)=>{
    res.send(jesus.sort((a,b)=>b.age-a.age));
});

app.listen(1000)