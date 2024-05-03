require('dotenv').config();
const express=require("express");
const app=express();
const port=process.env.PORT;

app.get("/",async(req,res)=>{
    res.send("hello wolrd");
})

app.listen(port,()=>{
    console.log(`app is live prot number ${port} `);
})