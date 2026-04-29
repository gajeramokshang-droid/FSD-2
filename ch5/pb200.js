// You have been assigned to develop a user feedback form for a website using Express.js and cookies. Implement the following requirements: 
// Process a form with the following fields: Name, Email , Message , Rating (radio buttons: Bad, Average, Good, Very Good, Excellent) When the user submits the form, 
// store their feedback information (name, email, message, and rating) in a cookie named "feedback" that expires in 10 seconds. Display a confirmation message to the user
//  after successfully submitting the form & Create a link to display the feedback details stored in the "feedback" cookie. When the user click to the link, retrieve 
//  the feedback information from the cookie and display it on the page also include a link on the feedback details page to Logout. When the user clicks the link, 
//  user redirected to home page. Make app.js file use get method in express js. No need to write html file having form elements.


const express=require('express');
const cookieParser=require('cookie-parser');
const app=express();
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send(`
        <form action='/submit' method='post'>
     <label>Name:   <input type='text' placeholder='Enter your name' name='name'/></label><br>
     <label>Email:  <input type='email' placeholder='enter your email ple' name='email'/></label><br>
     <label>Message: <textarea cols='30' rows='30' placeholder='enter your' name='message'></textarea></label><br>\
     <label> Rating:
     <input type='radio' name='rating' id='bad' value='Bad'/>Bad
     <input type='radio' name='rating' id='average' value='Average'/>Average
     <input type='radio' name='rating' id='good' value='Good'/>Good
     <input type='radio' name='rating' id='verygood' value='Very Good'/>Very Good
     <input type='radio' name='rating' id='excellent' value='Excellent'/>Excellent
     </label><br>
     <button type='submit'>Submit</button>
        </form>
    `);
});

app.post('/submit',(req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    const message=req.body.message;
    const rating=req.body.rating;
    const feedback={name,email,message,rating};
    res.cookie('feedback',JSON.stringify(feedback),{maxAge:10000});
    res.send(`Feedback submitted $uccessfully! <a href='/viewfeedback'>View Feedback</a>`);
});

app.get('/viewfeedback',(req,res)=>{
    const feedback=req.cookies.feedback;
    
    if(feedback)
    {
        const feedbackData=JSON.parse(req.cookies.feedback);
        res.send(`Name: ${feedbackData.name} <br>
        Email: ${feedbackData.email} <br>
        Message: ${feedbackData.message} <br>
        Rating: ${feedbackData.rating} <br>`);
    } 

    else
    {
        res.send('No feedback found.');
    }
});

app.get('/logout',(req,res)=>{
    res.clearCookie('feedback');
    res.redirect('/');
});     

app.listen(3000,()=>{
    console.log('Server running on http://localhost:3000');
});





