const mongoose = require("mongoose")
const Schema = mongoose.Schema

const pdfSchema = new Schema({
  url:{
    type: String
  },
  fileName: {
    type: String
  },
  size: {
    type: Number
  },
  title: {
    type: String
  },
  author: {
    type: String
  },
  keywords: {
    type: String
  }
})

module.exports = mongoose.model("Pdfs", pdfSchema)