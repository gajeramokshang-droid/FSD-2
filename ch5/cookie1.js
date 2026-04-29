const cp = require('cookie-parser');
const express = require('express');
const app = express();

app.use(cp());

app.get('/cookie', (req, res) => {
    res.cookie("name", "Express Js");
    res.cookie('fname', 'Thadeus');
    res.cookie('lname', 'Christian');
   
    res.cookie("ID", '2', { expires: new Date(Date.now() + 10000) });
    res.cookie('email', "hello@gmail.com", { maxAge: 50000 });

    res.send(req.cookies); 
    console.log(req.cookies);
});

app.listen(1000, () => console.log('Server running on port 1000'));

