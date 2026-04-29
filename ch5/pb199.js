// How to implement search and filtering in a REST API with Express.js ?

const express=require('express');
const app=express();

const users = [
  { id: 1, name: "Alice", city: "Ahmedabad" },
  { id: 2, name: "Bob", city: "Mumbai" },
  { id: 3, name: "Charlie", city: "Delhi" }
];

app.get('/users',(req,res)=>{
    const serach=req.query.serach;
    
    let result=users;

if(serach){
    result=result.filter(user=>user.name.includes(serach));
}
res.join(result);

})

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
