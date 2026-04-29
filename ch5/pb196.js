// Process a form using post method. Form has fields like username, password, confirm password, gender, submit and reset buttons. 
// After entering all fields, If password and confirm password matches, then form should be processed and all relevant and selected fields’
//  values should be printed. Otherwise, by printing warning message in red color, it should terminate. No need to write file having form 
//  elements.

const express=require('express');
const app=express();

app.use(express.urlencoded({extended:true}))


app.get('/',(req,res)=>{
    res.send(`
        <form action='/submit' method='post'>
        <label>Username: <input type='text' name='username' placeholder='Enter your name'/> </label> <br>
        <label>Password: <input type='password' name='password' placeholder='enter ypur pas'/> </label> <br>
        <label>Confirm Password: <input type='password' name='confirmPassword' placeholder='confirm your pass'/> </label> <br>
        <label>Gender:
        <input type='radio' name='gender' id='male' value='Male'/>Male<br>
        <input type='radio' name='gender' id='female' value='female'/>Female<br>
        </label><br>
        <button type='submit'>Submit</button>
        <button type='reset'>Reset</button>
        </form>
     `);
});


app.post('/submit',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const confirmpassword=req.body.confirmPassword;
    const gender=req.body.gender;

    if(password===confirmpassword)
    {
        res.send(`Username: ${username} <br>
            Password: F${password}<br>
            gender: ${gender}<br>
            `);
    }
    else{
        res.send(`<p style='color:red;'>Warning: Password and Confirm Password do not match!</p>`);
    }
});

app.listen(3000,()=>{
    console.log(`http://localhost:3000`)
});

