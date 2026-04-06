// Create a Node.js server that sends a JSON response when the user visits /api. 
// Set the correct response headers and explain the importance of sending JSON data in web applications.

const http=require('http')
http.createServer((req,res)=>{
    if(req.url==='/api'){
        const data={
            name:"Mathew",
            year:2026
        }
        res.write(JSON.stringify(data))
        res.end()
    }
    else{
         res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
    }
}).listen(100)
