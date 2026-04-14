// how to send HTML and JSON data as a Response using Express js

const express=require('express');
const app=express();

app.get('/both', (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html>
      <body>
        <h1>Hello from Express!</h1>
      </body>
    </html>
  `;
  res.json({
    html: html,
    message: "This response contains both HTML and JSON!"
  });
});

app.listen(9000)