// Write a Node.js script that uses the URL module to extract values from the following 
// URL:https://abc.com/data.txt?m1=Congrats&m2=Node+Test&m3=Best#DoneThe program should fetch the file name 
// from the URL, create a file with that name, and write the following content into the file using the values
//  from the URL:Congrats!Node Test#Done


const url = require('url');
const fs = require('fs');
const querystring = require('querystring');

const abbr = 'https://abc.com/data.txt?m1=Congrats&m2=Node+Test&m3=Best#Done';

// Parse the URL
const q = url.parse(abbr);
const filename = q.pathname.split('/').pop(); // data.txt
const query = querystring.parse(q.query);
const fragment = q.hash; // #Done

// Prepare the output string
// Requirement: Congrats!Node Test#Done
const output = `${query.m1}!${query.m2}${fragment}`;

// Write to file
fs.writeFile(filename, output, (err) => {
  if (err) throw err;
  console.log("Data written to file:", output);

  // Read back the file
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) throw err;
    console.log("File content:", data);
  });
});



