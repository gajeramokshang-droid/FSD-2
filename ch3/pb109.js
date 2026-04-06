// Explain URL module with appropriate example.

const url=require("url")
const addr = "http://localhost:8080/default.html?year=2026&month=april";
q=url.parse(addr,true)  //object parse
const q1=q.query;
console.log(q1)

