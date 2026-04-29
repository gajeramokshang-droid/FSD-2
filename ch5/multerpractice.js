const express=require('express');
const app=require();
const path=require('path')
const fs=require('fs');

const dirname=path.join(__dirname,"JESUSCHRIST");

if(!fs.existsSync(dirname)){
    fs.mkdirSync(dirname,{recursive:true});
}

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'JESUSCHRIST/');
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname));
    }
})

