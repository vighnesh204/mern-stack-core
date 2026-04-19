const mongoose = require("mongoose")

const MONGODB_URL = "mongodb://localhost:27017/"
const connectDB = async () => {
    await mongoose.connect(MONGODB_URL)
    .then(()=>console.log("DB Connected Successfully"))
    .catch((err)=> {
        console.log("DB connection failed")
        console.log(err)
        process.exit(1)
    })
}

module.exports = connectDB;