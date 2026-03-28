const express = require('express')
const app = express()

 
// middleware created
app.use((req, res, next)=>{
    console.log("middleware executed")
    next();
})

// Creating Utility Middleware
// logger - like morgan
app.use((req, res, next)=>{
    console.log(req.method, req.path, req.hostname)
})
app.get("/", (req, res)=>{
    res.send("Home Page")
})

app.listen(8080, ()=>{
    console.log("Server is running")
})