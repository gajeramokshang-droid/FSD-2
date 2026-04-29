const express=require('express');
const app=express();
const multer=require('multer');
const path=require('path');
const fs=require('fs');

const dirname=path.join(__dirname,"CHRIST");

if(!fs.existsSync(dirname)){
    fs.mkdirSync(dirname,{recursive:true});
}

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'CHRIST/');
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname));
    }
});

const upload=multer({storage:storage});

// Serve static files from the 'JESUS' directory
app.use('/CHRIST',express.static(path.join(__dirname,'CHRIST')));

app.post('/upload',upload.array("files"),(req,res)=>{
    if(req.files.length===0){
        return res.send("no files were uploaded")
    }
    res.send(`${req.files.length} files uploaded successfully
         `   );
})

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});