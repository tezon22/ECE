// @desc    Upload a Pdf
// @route   POST /api/upload
// @access  Private
const express = require('express')
const router = require('./downloads')
const pdfModel = require('../models/pdfModel')

router.post('/', async (req, res)=>{
    const {url, fileName, size, title, author, keywords, level, thumbnail} = req.body

    if(!url || !fileName || !size || !title || !author || !keywords || !level || !thumbnail){
        res.status(401).json({message: "Please fill all fields"})
    }
       const pdf = await pdfModel.create({
            url, fileName, size, title, author, keywords, level, thumbnail
           })
           if(pdf){
                res.status(200).json({message: "PDF uploaded sucessfully"})
               }else if(!pdf){
    res.status(400).json({message: "PDF not uploaded, Please try again"})
   }
})
module.exports = router