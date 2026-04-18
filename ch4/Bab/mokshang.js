const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
}));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/submit", (req, res) => {
    const { username } = req.body;
    req.session.username = username;
    res.redirect("/fetchsession");
});

app.get("/fetchsession", (req, res) => {
    if (!req.session.username) {
        return res.redirect('/');
    }
    res.send(`
        <h1>Welcome, ${req.session.username}!</h1>
        <a href="/logout">Logout</a>
    `);
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

app.listen(1000, () => {
    console.log('Server running on http://localhost:1000');
});