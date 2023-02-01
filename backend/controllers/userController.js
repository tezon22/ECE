const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const nodemailer = require("nodemailer");
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic} = req.body

  if (!name || !email || !password) {
    res.status(400).json({ message : 'Please add all fields'})
  }

  // Check if user exists
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400).json({ message : 'User already exists'})
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    pic,
  })

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ message : 'Invalide User Data'})
  }
})

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  // Check for user email
  const user = await User.findOne({ email })

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ message : 'Invalid Credentials'})
  }
})

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user)
})

//reset password
const resetpassword = asyncHandler( async (req,res) =>{
  const { email } = req.body;
  
  // Find user with the given email
  const user = await User.findOne({ email });
  if (!user) return res.status(400).send({ error: 'Email not found' });
  
  // Generate a reset password token
  const resetpasswordToken = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
  // Save the reset password token and email in the database
  user.resetpasswordToken = resetpasswordToken;
  user.resetpasswordExpires = Date.now() + 3600000; // 1 hour
  await user.save();
  
  // Send the reset password link to the user's email
  const resetPasswordLink = `http://localhost:5000/resetpassword/${resetpasswordToken}`;
  sendResetPasswordEmail(email, resetPasswordLink);
  
  res.send({ message: 'Password reset link sent. Check your email' });
})
// get token
const resetpasswordToken = asyncHandler( async (req,res) =>{
  const { password } = req.body;
  const { token } = req.params;
  
  // Verify the reset password token
  try {
    const { email } = jwt.verify(token, process.env.JWT_SECRET);
    
    // Find the user with the given email
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send({ error: 'Email not found' });
    
    // Check if the reset password token is valid and not expired
    if (!user.resetpasswordToken || user.resetpasswordExpires < Date.now()) {
      return res.status(400).send({ error: 'Token is invalid or has expired' });
    }
    
    // Update the user's password
    user.password = password;
    user.resetpasswordToken = undefined;
    user.resetpasswordExpires = undefined;
    await user.save();
    
    res.send({ message: 'Password reset successfully' });
  } catch (error) {
    return res.status(400).send({ error: 'Token is invalid or has expired' });
  }
})

async function sendResetPasswordEmail(to, resetPasswordLink) {
  // Create transporter object using Gmail SMTP
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "tezonteam@gmail.com", // generated ethereal user
      pass: "tezonece22", // generated ethereal password
    },
  });

  // Define email options
  let mailOptions = {
    from: "tezonteam@gmail.com",
    to: to,
    subject: "Reset Password",
    text: `Follow the link to reset your password: ${resetPasswordLink}`,
  };

  // Send email
  let info = await transporter.sendMail(mailOptions);

  console.log("Message sent: %s", info.messageId);
}

// get oldUser id
const oldUser = asyncHandler(async (req, res) => {
  const {email} = req.body
  const user = await User.findOne({email})
  if (user) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else if(!user){
    res.status(400).json({message: 'Email does not exist'})
  }
  else{
    res.status(500).json({message: 'Network error'})
  }
})


const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.pic = req.body.pic || user.pic;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      pic: updatedUser.pic,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    res.status(400).json({ message : 'User not Found'})
  }
});
// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

module.exports = {
  registerUser,
  loginUser,
  getMe,
  resetpassword,
  resetpasswordToken,
  oldUser,
  updateUserProfile,
};
