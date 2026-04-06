// How JSON processing is done in node js? Explain with suitable example.

const ps=require('fs')
ps.writeFile("JESUS.txt","Jesus is my lord",(err)=>{
    if(err) throw err;
    ps.readFile("JESUS.txt",'utf-8',(err,data)=>{
        if(err) throw err;
        console.log(JSON.stringify(data));
    })
})