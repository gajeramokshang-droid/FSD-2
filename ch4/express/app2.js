// write an express js appli to perform 
   //1. create an ejs file named contact.ejs that displays a heading , contact form, and contains a form with 
                      // 1..  text input for name,email for email,submit button
  //2. render this ejs file on the contact root
  //3. handle form submission using the post method on the submit root 
  //4. after form submission display a message on the browser thanku nameofperson we have receive your mail

express=require('express')
const app=express();
const path=require('path');
app.use(express.urlencoded({ extended: true }));
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('contact',{name:"Mokshang"})
});

app.post('/submit', (req, res) => {
    const username = req.body.username;
    res.send(`Thanku ${username}, we have received your mail`);
});
app.listen(1000)

