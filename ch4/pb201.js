// Write an express.js script to define 2 pages. 1st page has username 
// and password. Store this username to cookie on 2nd page. Cookie 
// must stay live for 1 day.

const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
}));

app.get('/', (req, res) => {
    res.send(`
        <form action='/submit' method='post'>
            Name: <input type='text' placeholder='Enter your name' name='name' required><br>
            Password: <input type='password' placeholder='Enter your password' name='pass' required><br>
            <button type='submit'>Submit</button>
        </form>
    `);
});

app.post('/submit', (req, res) => {
    const { name } = req.body;
    res.cookie("username", name, { maxAge: 24 * 60 * 60 * 1000 });
    req.session.username = name;
    res.send(`
        <h1>Welcome, ${name}!</h1>
        <p>Your name is stored in a cookie and session.</p>
        <a href="/">Back</a>
    `);
});

app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});