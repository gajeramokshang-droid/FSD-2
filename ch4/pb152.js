// Write an ExpressJS to take a textarea & submit button. After clicking submit button the content of 
// textarea should be represented on next page by writing each sentence (separated by dot) in new line.
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

// Form route
app.get("/form", (req, res) => {
  res.send(`
    <form action="/check" method="post">
      <textarea name="text" placeholder="Enter your text" rows="5" cols="40"></textarea><br><br>
      <button type="submit">Submit</button>
    </form>
  `);
});

// Handle submission
app.post("/check", (req, res) => {
  const inputText = req.body.text;

  const sentences = inputText
    .split(".")              // split by dot
    .map(s => s.trim())     // remove extra spaces
    .filter(s => s.length); // remove empty strings

  const result = sentences.join("<br>");

  res.send(result);
});

// Start server
app.listen(1000, () => {
  console.log("Server running on http://localhost:1000/form");
});