// @desc    Download a Pdf
// @route   GET /api/pdf/download/:id
// @access  Public
const express = require("express")
const pdfModel = require("../models/pdfModel")
const request = require('request')

const router = express.Router()

// getting all pdfs
router.get("/", async (req, res)=>{
  const allPdfs = await pdfModel.find()
  if(allPdfs){
  res.status(200).json(allPdfs)
  }else{
    res.status(500).json({mesage: "internal server error"})
  }
})

// getting the download link of a particular pdfs
router.get("/download/:id", async (req, res)=>{
  const id = req.params.id
  const pdf = await pdfModel.findById(id)
  const fileType = pdf.fileType
  try{
    if(fileType === "docx"){
      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
      res.setHeader('Content-Disposition', `attachment; filename=${pdf.fileName}.docx`);
    }else if(fileType === "jpg"){
      res.setHeader('Content-Type', 'image/jpeg');
      res.setHeader('Content-Disposition', `attachment; filename=${pdf.fileName}.jpg`);
    }else{
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename=${pdf.fileName}.pdf`);
    }
    const url = pdf.url
    request.get(url).pipe(res)
  }catch(err){
    res.redirect("/")
    console.log(`There was an error: ${err}`)
  }
})

module.exports = router