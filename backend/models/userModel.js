const mongoose = require("mongoose");
const {isEmail} = require("validator")

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
      validate:[isEmail, 'Please enter a valid email']
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
    },
    pic: {
      type: String,
      default: ''
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("user", userSchema);
