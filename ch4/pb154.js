// Write an express.js script to define one JSON array of 3 objects having members‘name’ 
// and ‘height’. height must be sorted descending order according to name.


const express=require('express');
const app=express();

const jesus=[
    {
        name:"JESUS",
        height:"6.5"
    },
    {
        name:"Jessica",
        height:'5.6'
    },
    {
        name:"Rachael",
        height:'5.8'
    }
]

app.get('/',(req,res)=>{
    res.send((jesus.sort((a,b)=>a.name.localeCompare(b.name))).reverse())
})

app.listen(3000)