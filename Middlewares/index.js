const express = require('express')
const app = express()

 
// middleware created
app.use((req, res, next)=>{
    console.log("middleware executed")
    next();
})

app.get("/", (req, res)=>{
    res.send("Home Page")
})

app.listen(8080, ()=>{
    console.log("Server is running")
})