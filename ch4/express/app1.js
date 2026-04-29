express=require('express')
const app=express();

const path=require('path');
app.set('view engine','ejs');
app.set('views',path.join(__dirname));
app.get('/',(req,res)=>{
    res.render('fifth',{name:"Mokshang"})
});

app.listen(3800);
