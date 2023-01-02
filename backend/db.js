const mongoose = require("mongoose")
require("dotenv").config()

const URI = process.env.URI

mongoose.set('strictQuery', true);
function connectToMongoDb(){
  mongoose.connect(URI)

  mongoose.connection.on("connect", ()=>{
    console.log(`Connected to Mongodb Successfully`)
  })
  mongoose.connection.on("error", (err)=>{
    console.log(`There was an error in connecting to Mongodb: ${err}`)
  })
}

module.exports = { connectToMongoDb }