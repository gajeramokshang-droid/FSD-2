// develop web app using express and ejs that allows a user to enter students name,and marks,through a form 
// after submssion the application should display the entered details and determine the result if the markls are 9 or 
// above show pass in green colorotherwise show fail in pink color


express=require('express')
const app=express();
const path=require('path');
app.use(express.urlencoded({ extended: true }));
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('form',{name:"Mokshang"})
});

app.post('/submit', (req, res) => {
    const username = req.body.username;
    const marks=req.body.marks;
    if(marks>=9){
        res.send(`<p style="color:blue">${username} Passed</p>`); 

    }
    else{
        res.send(`<p style="color:red">${username} fail hai </p>`); 

    }
    res.render('result', { username, marks, color });
});
app.listen(1000)



// ch4-5 marks code
// ch5-cookieParser,session,api,middleware 5 marks
// ch6=multer,ejs,nodemailer 5 marks

