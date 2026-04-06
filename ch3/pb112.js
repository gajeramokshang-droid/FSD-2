// Write node js script to fetch values from url given below and display output as 
// asked."https://www.google.com/exam.txt?c1=Hello&amp;c2=FSD2+T1+Test&amp;c3=Welcome+to+LJU#AllTheBest"
// 1) Data must be written as below in file named “exam.txt”. File name must be fetched fromthe url given above.
// Output:Hello!Welcome to LJU FSD2 T1 Test#AllTheBest
// 2) Read content from file “exam.txt” and send response to server and display data in “/” pagein same format as 
// above but in H1 tag and in red color.
// 3) If any other page is requested it shows “Page not found” message in plain text

const url=require('url')
const ps=require('fs')
const http=require("http")
abbr="https://www.google.com/exam.txt?c1=Hello&amp;c2=FSD2+T1+Test&amp;c3=Welcome+to+LJU#AllTheBest"
ps.writeFile("exam.txt","",(err)=>{
    if(err) throw err;
    q=url.parse(abbr,false)
    q1=q.query;
    console.log(q1)
        http.createServer((res,req=>{
            if(req.url==='/'){
                ps.readFile("exam.txt","utf-8",(err,data)=>{
                    if(err) throw err;
                    res.writeHead(200,{"Content-type":"text/html"});
                    res.write(data);
                    res.end();
                })
            }
            else{
                console.log("Page not found")
            }
        })).listen(1000)
    })

