const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        default: null,
    },
    lastname: {
        type: String,
        default: null,
    },
    email:{
        type: String,
        required: [true, "email is required"],
        unique: true,
    },
     password:{
        type: String,
        required: [true, "password is required"],
    },
     token:{
        type: String,
    }
})

module.exports = mongoose.model("user", userSchema)