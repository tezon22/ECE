const express = require('express')
const router = require('./downloads')
const pdfs = require('../models/pdfModel')
const route = express.Router()

router.post('/', async (req, res)=>{
    const {url, fileName, size, title, author, keywords} = req.body

    if(!url || !fileName || !size || !title || !author || !keywords){
        res.status(401).json({message: "Please fill all fields"})
    }
   const pdf = await pdfs.create({
    url, fileName, size, title, author, keywords
   })
   if(pdf){
    res.status(200).json({message: "pdf uploaded"})
   }else if(!pdf){
    res.status(400).json({message: "pdf not uploaded"})
   }
})
module.exports = router