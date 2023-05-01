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
  },
  uplodedAt: {
    type: Date, 
    defualt: Date.now 
    },
  level: {
    type: String
  },
  thumbnail: {
    type: String
  },
  fileType: {
    type: String,
    default: "pdf"
  }
})

module.exports = pdfSchema