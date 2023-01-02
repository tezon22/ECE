const express = require("express")
const request = require('request');
const pdfModel = require("../models/pdfModel")

const router = express.Router()

router.get("/", (req, res)=>{
  res.send("Welcome to the pre-download page")
})
router.get("/:id", async (req, res)=>{
  const id = req.params.id
  const pdf = await pdfModel.findById(id)
  try{
   res.setHeader('Content-Type', 'application/pdf');
   res.setHeader('Content-Disposition', `attachment; filename=${pdf.fileName}.pdf`);
      const url = pdf.url
      request.get(url).pipe(res)
  }catch(err){
    res.redirect("/")
    console.log(`There was an error: ${err}`)
  }
})

module.exports = router