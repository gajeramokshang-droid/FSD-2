// Write a nodejs script to print query string of url in file using ES6 callback. (Async File System).

var u=require('url')
var ps=require("fs")
var adr1=" http://localhost:8080/default.html?year=2025&month=feb";
q=u.parse(adr1,false)
q1=q.query;
ps.writeFile("jesus.txt",q1,(err)=>{
    if(err) throw err;
    console.log("Completed")
})


// In u.parse(adr1, false), the false means the query part (?year=2025&month=feb) will stay as a plain string,
//  while true would convert it into an object like { year: "2025", month: "feb" } for easier access.


// Because when you pass true, u.parse() converts the query into an object, and fs.writeFile() only accepts string or binary data, not objects.

// With false → q.query is a string → "year=2025&month=feb" ✅ works
// With true → q.query is an object → { year: "2025", month: "feb" } ❌ error

// 👉 So Node throws:

// “data must be string or Buffer… Received object”