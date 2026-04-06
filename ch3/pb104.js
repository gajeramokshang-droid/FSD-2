// Develop a Node.js application that parses query parameters from a URL using the url module and displays 
// them in the browser. Demonstrate the use of url.parse() with query parsing enabled.

var url=require('url')
var addr="http://localhost:8080/default.html?year=2025&month=feb";
var q=url.parse(addr,true)
q1=q.query
console.log(q1)

