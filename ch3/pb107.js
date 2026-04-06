// Write a node.js script to print query string of URL on console as well as on file using ES6.

const url=require('url')
const ps=require("fs")
const addr = "http://localhost:8080/default.html?year=2026&month=april";
const jesus=url.parse(addr,false)
const query=jesus.query
console.log(query)
ps.writeFile("jesus.txt",query,(err)=>{
    if(err) throw err;
    ps.readFile("jesus.txt","utf-8",(err,data)=>{
        if(err) throw err;
        console.log(data)
    })
})

