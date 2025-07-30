const express = require("express");

const router =express.Router()


router.get("/",(req,res)=>{
    console.log("heloo")
    res.json({message:"heloo World"})
})


module.exports=router;
