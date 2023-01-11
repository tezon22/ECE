const express = require('express')
const router = require('./downloads')
const pdfs = require('../db')
const route = express.Router()

router.post('/', async (req, res)=>{
    const {url, fileName, size, title, author, keywords, level} = req.body

    if(!url || !fileName || !size || !title || !author || !keywords || !level){
        res.status(401).json({message: "Please fill all fields"})
    }
   const pdf = await pdfs.create({
    url, fileName, size, title, author, keywords, level
   })
   if(pdf){
    res.status(200).json({message: "pdf uploaded"})
   }else if(!pdf){
    res.status(400).json({message: "pdf not uploaded"})
   }
})
module.exports = router