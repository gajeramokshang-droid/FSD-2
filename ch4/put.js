// // - It handles PUT requests, which are typically used to update existing data on the server.
// // - Unlike POST (which creates new data), PUT replaces or modifies something that already exists.

// - URL: http://localhost:3000/user/10
// - Body: { "name": "Mokshang", "role": "Intern" }
// - Response: "User 10 updated to Mokshang with role Intern"

const express=require("express");
const app=express();

let user = { id: 1, name: "Mokshang", role: "Intern" };
app.put("/user/:id",(req,res)=>{
    const id=req.params.id;
    const {name,role}=req.body;
    if(parseInt(id)===user.id){
        user.name=name;
        user.role=role;
        res.send(`User ${id} updated to ${name} with role ${role}`);
    } else {
        res.status(404).send("User not found");
    }
})

app.listen(100,()=>{
    console.log("Server running on http://localhost:3000");
})

