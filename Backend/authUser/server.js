const express =require("express");
const app = express();
const noteModel = require("./src/model/note.model")
const connectDB = require("./src/db/db");
app.use(express.json()) // middleware

connectDB();

app.post("/notes",async (req,res)=>{
    const {title,desc} = req.body;
    await noteModel.create({  title, desc })
    res.json({
        mesaage: "data send Successfull",
        title:title
    })
})

app.get("/notes", async (req, res) => {

    try{

        const notes = await noteModel.find();
        res.json({
            message:"data fetch SuccessFully",
            notes
        })

    }catch(error){
        console.log(error)
    }
})

app.patch("/notes/:id", async (req, res) => {
    const { id } = req.params;
   
    try {
        const updatedNote = await noteModel.findByIdAndUpdate(
            id,
           {title:"The New House"}
        );
        if (!updatedNote) {
            return res.status(404).json({ error: "Note not found" });
        }
        res.json({ message: "Note updated successfully", note: updatedNote });
    } catch (error) {
        res.status(500).json({ error: "An error occurred while updating the note" });
    }
});

app.delete("/notes/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deletedNote = await noteModel.findByIdAndDelete(id);
       
        res.json({ message: "Deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "An error occurred while deleting the note" });
    }
});

app.listen(3000,()=>{
    console.log("Server Has Started Succesfully!!")
})

