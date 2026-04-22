// write express js using session to display how many times a user vist a website
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
app.get('/', (req, res) => {
    if (!req.session.visits) {
      req.session.visits = 0;
    }
    req.session.visits++;
    res.send(`You have visited this page ${req.session.visits} times.`);
  });

  app.listen(10000)