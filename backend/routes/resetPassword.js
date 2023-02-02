const express = require("express");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const Token = require("../models/token");
const AppError = require("../utils/appError");
const router = express.Router();


router.patch("/resetpassword/:token", async (req, res, next) => {
  // get user based on the token
  // const id = req.params.id, 
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  // if token has not expired, and there is user, set the new password
  if (!user) {
    return next(new AppError("Token is invalid or has expired", 400));
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  // update changePasswordAt property for the user
  // log the user in, send JWT
    const token = signToken(user._id);

    res.status(200).json({
      status: 'success',
      token
    });
});
module.exports = router;
