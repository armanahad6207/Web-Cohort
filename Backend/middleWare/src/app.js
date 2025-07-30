const express = require("express");
const app = express();
const route = require("./routes/index.route")

app.use( (req,res,next)=>{

    console.log("midleware between  app and route")
    next()
})
app.use("/",route)

module.exports = app;