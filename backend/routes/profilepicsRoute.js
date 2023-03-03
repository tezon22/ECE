const express = require("express");
const router = express.Router();
const User = require('../models/userModel')


router.post('/:id', async(req,res)=>{
  const {pic} = req.body
  const {id} = req.params
  try { 
      const user = await User.findById(id)
      user.pic = pic
      await user.save()
      res.status(200).json({"message": 'Picture sucessfully updated'})
  } catch (error) {
    res.status(400).json({"message": error})
  }
})

router.get('/:id', async(req,res)=>{
  const {id} = req.params
  try { 
      const user = await User.findById(id)
      res.status(200).json({"message": user.pic})
  } catch (error) {
    res.status(400).json({"message": error})
  }
})
module.exports = router;
