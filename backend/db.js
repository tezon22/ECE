const mongoose = require("mongoose");
const pdfSchema = require("./models/pdfModel");
require("dotenv").config()
const URI = process.env.URI

mongoose.set('strictQuery', true);

 const pdf = mongoose.createConnection(URI)
  mongoose.connection.on("connect", ()=>{
    console.log(`Connected to Mongodb Successfully`)
  })
  mongoose.connection.on("error", (err)=>{
    console.log(`There was an error in connecting to Mongodb: ${err}`)
  })
  const pdfs = pdf.model('pdfs', pdfSchema )


module.exports = pdfs