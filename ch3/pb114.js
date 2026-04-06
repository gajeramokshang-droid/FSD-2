// Write node.js script to print “Welcome Admin” on home page of server. If user request for second page it display
//  “This is second page” in italic font-style and if any other request is requested it shows “Page not found” 
//  message.

const http=require("http")
http.createServer((res,req=>{
    if(req.url==='/'){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write("<h1> Welcome Admin </h1>");
        res.end();
    }
    else if(req.url==='/secondpage'){
         res.writeHead(200,{"Content-Type":"text/html"})
        res.write("<p style='font-style:italic'");
        res.end();
    }
    else{
         res.writeHead(200,{"Content-Type":"text/html"})
        res.write("Page not found exception");
        res.end()
    }
})).listen(1000);

