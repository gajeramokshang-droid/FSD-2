const express=require('express');
const app=express();


const logentry=(req,res,next)=>{
	console.log("Student entered the campus at:",new Date().toLocaleString());
    next();
}

const jesus=(req,res,next)=>{
    const mary=req.query.id;
    if(mary==='12345'){
        console.log("Valid ID proofed Verified");
        next();
    }
    else{
        console.log("Entry of student is denied")
    }
}

app.get('/class',logentry,jesus,(req,res)=>{
       res.send("Welcome to the classroom! 🎓");
})

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
