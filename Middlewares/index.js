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
// app.use("/api", (req, res)=>{
//     let { token }= req.query;
//     if(token === "giveaccess"){
//         next();
//     }
//     res.send("ACCESS DENIED")
// })


const checkToken = (req, res, next)=>{
    let { token }= req.query;
     if(token === "giveaccess"){
        next();
    }
    res.send("ACCESS DENIED")
}


// API Route for data
// Passing Multiple Middleware to a Route
// jb bhi /api route hit hoga to pehle checkToken middleware execute hoga aur agar token sahi hoga to data milega warna access denied aayega
app.get("/api", checkToken, (req, res)=>{
    res.send("Data")
})

// app.use((req, res)=>{
//     res.status(404).send("Page Not Found")
// })

// Error Handling Middleware
app.use((err, req, res, next)=>{
    console.error("------ Error Occurred ------");
    next(err); // Pass the error to the default Express error handler
    // next(); // If you want to continue to the next middleware without sending a response, use next() without arguments
})


app.listen(8080, ()=>{
    console.log("Server is running")
})