const express= require("express");
const app = express();

app.use(express.json())
let notes = []

app.post("/notes",(req,res)=>{
   notes.push(req.body)
  res.json({
    message:"data send successfully",
    notes:notes  
  })
})

app.listen(3000,()=>{
    console.log("server running")
})