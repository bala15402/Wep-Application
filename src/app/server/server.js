const express=require('express')
const bodyparser=require('body-parser');
const PORT=3000;
const api=require('./routes/api')
const app= express();
app.use(bodyparser.json())

app.use('/api',api);
app.get('/',function(req,res){
    res.send('hello from server');
});
app.get("/login",function(req,res){
    res.setHeader("Access-Control-Allow-Origin","*");
    res.json({message:true});
});
app.get("/resis",function(req,res){
    res.setHeader("Access-Control-Allow-Origin","*");
    res.json({message:true});
});
app.listen(PORT,function(){
    console.log('server running:'+PORT);
});
