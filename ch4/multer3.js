//write express js script to upload file with size limit of 10 mb to spcific dict name data and this folder file must be store in format 
//of lju-file.pdfwhere lju is the fieldname

const multer = require("multer");
express=require("express")
app=express()
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname,{index:"m4.html"}));
store=multer.diskStorage(
    {
        destination:"multiple",
        filename:function(req,file,cb)
        {
            cb(null,file.fieldname+"-"+"file.pdf")
        }
    
    }
)

var upload=multer({storage:store,
    limits:{
        fileSize:1024*1024
    }
})
app.post("/uploadfile",
    upload.array("lju",5),
    (req,res)=>{
        const file=req.files;
        if(file){
            res.set("content-type","text/html")
            for(i of file)
            {
                res.write("<h1>File : "+i.originalname+"has been upload in")
            }
            
        }
    }
)
app.listen(9876)