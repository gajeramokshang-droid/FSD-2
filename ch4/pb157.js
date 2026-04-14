// Write an ExpressJS to take a UserName, Password, Textarea for “message” & submit button using get 
// method.1) After clicking submit button the content of submitted details should be represented on “/login” page along with one “show vowel” link.
// 2) By clicking “show vowel” link count of vowel used in submitted “message” will display on “/message” page. (Use next() to route page)
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

// make yash accessible outside /login
let yash = "";

app.get('/home', (req, res) => {
    res.send(`
        <form action='/login' method='post'>
            <input type='text' placeholder='Enter your name:' name='name'/>
            <input type='password' name='password'/>
            <textarea cols='40' rows='5' name='textarea'></textarea>
            <button type='submit'>Submit</button>
        </form>
    `);
});

app.post('/login', (req, res) => {
    const jesus = req.body.name;
    const mary = req.body.password;
    const james = req.body.textarea;
    yash = `Name is ${jesus}, password is ${mary}, and suggestion is ${james}`;
    res.send(`
        ${yash}<br>
        <a href="/vowel">Go to the vowel page</a>
    `);
});

// use GET here because the link triggers a GET request
app.get('/vowel', (req, res) => {
    let count = 0;
    for (let char of yash.toLowerCase()) 
        {  
        if ("aeiou".includes(char)) {
            count++;
        }
        }
    res.send(`Total vowels in your input: ${count}`);
});

app.listen(30000, () => {
    console.log("Server running on port 30000");
});
