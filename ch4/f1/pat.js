const express = require('express');
const path = require('path');
const app = express();


app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  
    res.sendFile(path.join(__dirname, "parth.html"));
});

app.post('/submit', (req, res) => {
    const userData = req.body; 
    console.log(userData); 
    res.send(`<h1>Thanks for submitting, ${userData.username}!</h1>`);
});

app.listen(10000, () => {
    console.log(`Server running at http://localhost:10000`);
});
