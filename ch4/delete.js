// - It handles DELETE requests, which are meant to delete existing data from the server.
// - Commonly used in APIs when you want to remove a record (like deleting a user, product, or task)

const express=require("express");
const app=express();

let users = [
  { id: 1, name: "Mokshang" },
  { id: 2, name: "Alex" }
];

app.delete("/user/:id",(req,res)=>{
    const id=req.params.id;
    const name=req.body.name;
    res.send(`User with id ${id} deleted successfully`);
});

app.listen(3000,()=>{
    console.log("Server running on http://localhost:3000");
})

