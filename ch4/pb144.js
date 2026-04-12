// write an express.js script to load an HTML file having username and password and submit button. 
// On clicking submit button. It should jump on "check" page using "POST" method. If username is "admin" , 
// then jump on next middleware to print "welcome… admin" , if username is not "admin" , then stay on same
//  middleware to print "warning msg" in red color.
const express = require("express");
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Route to serve the form
app.get("/form", (req, res) => {
  res.send(`
    <form action="/check" method="POST">
      <input type="text" name="username" placeholder="Enter your name" />
      <button type="submit">Submit</button>
    </form>
  `);
});

// First middleware: check username
app.post("/check", (req, res, next) => {
  const username = req.body.username;

  if (username === "admin") {
    // Pass control to next middleware
    next();
  } else {
    // Stay here and show warning
    res.send(`<h3 style="color:red">Warning msg</h3>`);
  }
});

// Second middleware: runs only if username === "admin"
app.post("/check", (req, res) => {
  res.send("Welcome... admin");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});