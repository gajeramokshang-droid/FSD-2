//  create a html which contains form with field fname,lname,pass,submit, button
//2 once form submitted store all this values to the cookie on the next page
//3 then redirect user to admin page and clear cookie set for the last name
// then  display remaining set of cookie on this page using post method
const express = require("express");
const app = express();
const path = require('path');
const cookieParser = require("cookie-parser");

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.post('/submit', (req, res) => {
    const { fname, lname, pass } = req.body;
    console.log('Form submitted:', { fname, lname, pass });
    res.cookie('fname', fname);
    res.cookie('lname', lname);
    res.cookie('pass', pass);
    console.log('Cookies set:', { fname, lname, pass });
    res.redirect('/admin');
});

app.get('/admin', (req, res) => {
    console.log('Admin route accessed');
    res.clearCookie('lname');
    const cookie = req.cookies;
    console.log('Remaining cookies:', cookie);
    res.send(`
        <h1>Admin Page</h1>
        <p>Remaining Cookies:</p>
        <pre>${req.cookies.fname+req.cookies.name+req.cookies.pass}</pre>
    `);
});

app.listen(2000, () => {
    console.log(`Server running on http://localhost:2000`);
});