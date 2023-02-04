const express = require("express");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const {User} = require("../models/userModel");
const Token = require("../models/tokenModel");
const AppError = require("../utils/appError");
const router = express.Router();


router.patch("/resetpassword/:token", async (req, res, next) => {
  try {
    const schema = Joi.object({ password: Joi.string().required() });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await User.findById(req.params.userId);
    if (!user) return res.status(400).send("invalid link or expired");

    const token = await Token.findOne({
        userId: user._id,
        token: req.params.token,
    });
    if (!token) return res.status(400).send("Invalid link or expired");

    user.password = req.body.password;
    await user.save();
    await token.delete();

    res.send("password reset sucessfully.");
} catch (error) {
    res.send("An error occured");
    console.log(error);
}
});
module.exports = router;
