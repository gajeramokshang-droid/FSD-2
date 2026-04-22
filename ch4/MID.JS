// Write express js script to perform following tasks.
// 1. Create one html file which contains one text field for name, email field and checkbox for subscription.
// Html file will be loaded on home page. Email and name fields are required fields.

// 2. On login page welcome user and email id data should be printed.
// a. If user checked the subscription then “Thank you for the subscription” message will be printed
// and “logout” link will be displayed under the message. If user clicks logout link then he/she will
// be redirected to the home page.
// b. If user has not opted for the subscription then “You can subscribe to get daily updates” message
// will be printed and “subscribe” link will be displayed under the message.
// c. If user clicks subscribe link then he/she will be redirected to the subscription page. In this page
// “Thank you for the subscription” message will be printed and “logout” link will be displayed
// under the message. If user clicks logout link then he/she will be redirected to the home page.
// Use concept of the middleware and you can use any of http methods(get/post).

const express = require('express');
const session = require('express-session');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
}));

const requireLogin = (req, res, next) => {
    if (!req.session.user) {
        return res.redirect('/');
    }
    next();
};

const checkSubscription = (req, res, next) => {
    if (req.session.user.subscribe) {
        return res.redirect('/welcome');
    }
    next();
};

app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome! Please fill the form:</h1>
        <form action='/login' method='post'>
            Name: <input type='text' name='name' required><br>
            Email: <input type='email' name='email' required><br>
            <label>
                <input type='checkbox' name='subscribe'> Subscribe for daily updates
            </label><br>
            <button type='submit'>Submit</button>
        </form>
    `);
});

app.post('/login', (req, res) => {
    const { name, email, subscribe } = req.body;
    req.session.user = { name, email, subscribe: !!subscribe };
    res.redirect('/welcome');
});

app.get('/welcome', requireLogin, (req, res) => {
    const { name, email, subscribe } = req.session.user;
    let message, link, linkText;
    if (subscribe) {
        message = "Thank you for the subscription";
        link = "/logout";
        linkText = "Logout";
    } else {
        message = "You can subscribe to get daily updates";
        link = "/subscribe";
        linkText = "Subscribe";
    }
    res.send(`
        <h1>Welcome, ${name}!</h1>
        <p>Your email is: ${email}</p>
        <p>${message}</p>
        <a href="${link}">${linkText}</a>
    `);
});
app.get('/subscribe', requireLogin, checkSubscription, (req, res) => {
    req.session.user.subscribe = true;
    res.redirect('/welcome');
});


app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});