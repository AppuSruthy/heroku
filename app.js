const express=require("express");
const app=express();

app.get("/",function(req,res){
    res.send("welcome");
})

const port=process.env.PORT||3000
app.listen(port,function(req,res){
    console.log("listening to port");
})