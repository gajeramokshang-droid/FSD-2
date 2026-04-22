// Write express js script to perform tasks as asked below. 
// 1. Create one HTML file which contains two number type input 
// fields, one dropdown which contains options to select like (addition, 
// subtraction, multiplication, division) and one submit button. 
// 2. The input fields must contain the value greater than 0 else it will 
// give a message “Please enter the valid number”. Also, user must 
// select any type of formula from the dropdown else give a message 
// “You have not selected any formula”. (Message will be displayed on 
// “/calc” page.) 
// 3. If one formula is selected and numbers are entered then Both 
// numbers should be stored in cookies which expires in 50 seconds. 
// Respective calculations will be performed on the page “/calc”.

const express=require('express')
const app=express();
const cookieParser=require('cookie-parser');
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.send(`
        <form action='/submit' method='post'>
        <label>Number:<input type='number' placeholder='enter your no1' name='no1'></label><br>
         <label>Number2:<input type='number' placeholder='enter your no' name='no2'></label><br>
        <label for="cars">Choose a car:</label><br>
        <select id="cars" name="calc"><br>
        <option value="Addition">Addition</option><br>
        <option value="Subtraction">Subtraction</option><br>
        <option value="Multiplication">Multi</option><br>
        <option value="Div">Division</option><br>
        </select>
        <button type='submit'>Submit</button>
        </form>
        `);
});

app.post('/submit',(req,res)=>{
    const num1=req.body.no1;
    const num2=req.body.no2;
    const drop=req.body.calc;
    if(num1<=0||num2<=0){
        console.log("Number must be greater than 0");
    }
    else if(!drop){
        console.log( "You have not selected any formula.");
    }
    else{
        res.cookie("num1",num1,{maxAge:50000});
        res.cookie('num2',num2,{maxAge:50000});

        if(drop=='Addition'){
            result=parseFloat(num1)+parseFloat(num2);
        }
        else if(drop=="Subtraction"){
            result=parseFloat(num1)-parseFloat(num2);
        }
        else if(drop=='Multi'){
            result=parseFloat(num1)*parseFloat(num2);
        }
        else if(drop=='Division'){
            result=parseFloat(num1)/parseFloat(num2);
        }
    }
    res.send(`
        Meaasage ${result}`);
});

app.listen(30000);