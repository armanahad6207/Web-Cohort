const http = require("http")

const server = http.createServer((req,res)=>{
    res.end("this is my server")
}); // created the server

server.listen(3000,()=>{
    console.log("server is running on the port 3000")
})