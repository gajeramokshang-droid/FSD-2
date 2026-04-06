// Create HTTP webpage on which Home page display “Welcome to Log in page” in blue color and font size must be 32px, 
// Login page shows one HTML file from static URL having Form with detail for Username, Password, submit and reset
//  button, Gallery page reflect one Image “hello.jpg” and any other page shows “Page Not found”. Write all
//   necessary files to perform task. (Image already exist in same folder)

const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
  if (req.url === '/') {
    // Home page
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1 style="color:blue; font-size:32px;">Welcome to Log in page</h1>');
  } 
  else if (req.url === '/login') {
    // Login page: serve login.html
    fs.readFile(path.join(__dirname, 'login.html'), 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading login page');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else if (req.url === '/gallery') {
    // Gallery page: serve hello.jpg
    fs.readFile(path.join(__dirname, 'hello.jpg'), (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading image');
      } else {
        res.writeHead(200, { 'Content-Type': 'image/jpeg' });
        res.end(data);
      }
    });
  } else {
    // Any other page
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
}).listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

