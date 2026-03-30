const express = require('express')
const app = express()

 
// middleware created
// app.use((req, res, next)=>{
//     console.log("middleware executed")
//     next();
// })

app.use("/react", (req, res, next)=>{
    console.log("middleware executed for react route")
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

// API Token as a Query String
// http://localhost:8080/api?token=giveaccess
// agr token sahi hoga to data milega warna access denied aayega
app.use("/api", (req, res)=>{
    let { token }= req.query;
    if(token === "giveaccess"){
        next();
    }
    res.send("ACCESS DENIED")
})

// API Route for data
app.get("/api", (req, res)=>{
    res.send("Data")
})

app.use((req, res)=>{
    res.status(404).send("Page Not Found")
})

app.listen(8080, ()=>{
    console.log("Server is running")
})