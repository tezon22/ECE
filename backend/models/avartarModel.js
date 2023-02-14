const mongoose = require("mongoose");


const avatarSchema = new mongoose.Schema({
  fileName: String,
});


module.exports = mongoose.model('Avatar', avatarSchema);