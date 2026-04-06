// Explain how request and response objects work in the HTTP module of Node.js.
//  Write a short code snippet demonstrating the use of res.write() and res.end().

const http=require('http')
http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<h1>Jesus is my Lord and Saviour and He is The King of kings</h1>")
        res.end()
    }
}).listen(10);

