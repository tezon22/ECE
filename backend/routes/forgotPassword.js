const express = require("express");
const jwt = require("jsonwebtoken");
const AppError = require("./../utils/appError");
const sendEmail = require("./../utils/email");
const User = require("../models/userModel");
const Token = require("../models/token");
const Joi = require("joi");
const router = express.Router();

router.post("/forgotpassword", async (req, res, next) => {
 try {
  const schema = Joi.object({email:Joi.string().email().required()});
  const {error} = schema.validate(req.body);

 } catch (error) {
  
 }
});

module.exports = router;
