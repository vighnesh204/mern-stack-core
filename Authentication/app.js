require("./config/database").connectDB();

const express = require('express')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

// import model - User

const User = require("./models/user")

const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(8080, ()=>{
    console.log(`Server is running on port 8080`)
})


app.get("/", (req, res)=>{
    res.send(`<h1>Auth System</h1>`)
})

app.post("/register", (req, res)=>{
    try {
        // console.log(req.body);
    // collect data
    const { firstname, lastname, email, password } = req.body;
    
    // validate the data, if exists
    if(( email && password && firstname && lastname )){
        res.status(401).send("All field are required")
    }

    // check if user exists or not
    const existingUser = await User.findOne({ email })
    if(existingUser){
        res.status(401).send("User already found in database")
    }

    // encrypt the password
    const myEncrytPassword = await bcrypt.hash(password, 10)

    // create a new entry in database

    const user = await User.create({
        firstname,
        lastname,
        email,
        password: myEncrytPassword
    })

    // create a token and send it to user
    // jwt.sign({all the payloads}, "secret", {sign options})

    const token = jwt.sign({
        id: user._id,
        email
    }, "mysecret", { expiresIn: "2h"})

    user.token = token
    // dont want to send the password
    user.password = undefined

    res.status(201).json(user)

    } catch (error) {
        console.log(error)
        res.json({
            message: error
        })
    }
})