// Write expressJS script to perform task as asked:(A) Create one HTML file which contains text-field named username, 
// one dropdown which contains options of country like India, USA, Canada, Australia. & one submit button.
// (B) Once user clicked on submit button it will jump to next page than username & You are from “country name” which ever selected from drop box 
// should be printed.(C) Use get method to request data.

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Route for the form page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for handling form submission (now using POST)
app.post('/submit', (req, res) => {
    const { username, country } = req.body; // Use req.body instead of req.query
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Result</title>
        </head>
        <body>
            <h1>Hello, ${username}!</h1>
            <p>You are from ${country}.</p>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

