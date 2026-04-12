
const express = require("express");
const app = express();


// Route to show a simple form (GET request)
app.get("/form", (req, res) => {
  res.send(`
    <form action="/submit" method="POST">
      <input type="text" name="username" placeholder="Enter your name" />
      <button type="submit">Submit</button>
    </form>
  `);
});

// Route to handle form submission (POST request)
app.post("/submit", (req, res) => {
  const username = req.body.username; // Access data sent in the form
  res.send(`Hello, ${username}! Your data was received.`);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});


// app.post() is used when the client wants to send data to the server, usually to create something new (like submitting a form, posting a comment, or adding a record).
// - GET → fetch data (read)
// - POST → send data (create)
