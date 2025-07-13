const express = require("express");
const app = express() //server Created

app.get("/",(req,res)=>{
    res.send("helloo world !!!!")
})
app.get("/Home", (req,res)=>{
  res.send("welcome to home page")
})
app.get("/galery" , (req,res)=>{
    res.send("welcome to gallery page")
})

app.listen(3000,()=>{
    console.log("Server Started At Port 3000")
})



