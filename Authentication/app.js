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

app.post("/register", async (req, res)=>{
    try {
        // console.log(req.body);
    // collect data
    const { firstname, lastname, email, password } = req.body;
    
    // validate the data, if exists
    if(!( email && password && firstname && lastname )){
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

app.post("/login", async (req, res) => {
    try {
        // collect information from frontend
        const { email, password } = req.body;
        // validate
        if(!(email && password)){
            res.status(401).send("email and passsword required")
        }
        // check user in database
        const user = await User.findOne({ email })
       
        // match the password
        // if the user exists 
        if(user && (await bcrypt.compare(password, user.password))){
            const token = jwt.sign({id: user._id, email}, "mysecret", { expiresIn: "2h"})
            user.password = undefined
            user.token = token

            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000 ),
                httpOnly: true // nobody can manipulate this cookies
            }
            res.status(200).cookie("token", token, options).json({
                success: true,
                token,
                user
            })
        }   

        // create token and send
        res.sendStatus(400).send("email or password is incorrect")
    } catch (error) {
        console.log(error);
        
    }
})