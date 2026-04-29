const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

// Set a cookie
app.get('/set-cookie', (req, res) => {
  res.cookie('username', 'JohnDoe', {
    maxAge: 9000,
    httpOnly: true,
  });
  res.send('Cookie has been set!');
});

// Read a cookie
app.get('/get-cookie', (req, res) => {
  const username = req.cookies.username;
  if (username) {
    res.send(`Welcome back, ${username}!`);
  } else {
    res.send('No cookie found.');
  }
});

// Clear a cookie
app.get('/clear-cookie', (req, res) => {
  res.clearCookie('username');
  res.send('Cookie cleared!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});