// Write a node.js script to load a simple.html file on nodejs web server & 
// prints its contents as an html content.

const http=require('http')
const ps=require('fs')
http.createServer((req,res)=>{
    ps.readFile("jesus.html",(err,data)=>{
        if(err) throw err;
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data);
        res.end()
    })
}).listen(20);

