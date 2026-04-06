// Write a Node.js program to create an HTTP server using the http module that listens on port 3000 and
//  displays different messages for / and /about routes. Explain how basic routing is implemented using the 
//  request object.

const http=require('http');
http.createServer(function(req,res){
    if(req.url==='/'){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<p>The Lord is My Shephard </p><h1> Jesus is my lord</h1>")
        res.end()
    }
    else if(req.url.startsWith("/about"))
        {
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<p>Mokshang Gajera</p><h1> Mok</h1>")
        res.end()
    }
    else{
        console.log("Nothing")
    }
}).listen(1000)

