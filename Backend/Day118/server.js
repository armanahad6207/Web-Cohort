const express = require("express");
const app = express();
app.use(express.json());

let notes = []

// send data to th server
app.post("/notes",(req,res)=>{
    notes.push(req.body);

    res.json({
       message:"data   send successfuly",
    })
})

// get data from the server
app.get("/notes",(req,res)=>{
    res.json({
        notes:notes
    })
})

// delete the data from server
app.delete("/notes/:index",(req,res)=>{
    const index = req.params.index;
     delete notes[index];
     res.json({
        message:`product deleted at index ${index}`
     });

// update the data 
app.patch("/notes/:index",(req,res)=>{
    const index = parseInt(req.params.index);
    let {title} = req.body;

    if(!notes[index]){
        return res.status(404).json({error:"note not found"})
    }
    notes[index].title = title;

    res.json({message:"item updated successfully"})
    console.log(notes[index])

    
});  


});


app.listen(3000,()=>{
    console.log("server started at 3000")
})