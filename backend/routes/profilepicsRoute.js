const express = require("express");
const router = express.Router();
const multer = require("multer");
const Avatar = require("../models/avartarModel");
const path = require("path");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // Set file size limit to 1 MB
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

function checkFileType(file, cb) {
  // Allowed extensions
  const filetypes = /jpeg|jpg|png/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}
const type = upload.single("avatar");

router.post("/", type, (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  const newAvatar = new Avatar({
    fileName: req.file.filename,
  });
  newAvatar.save((err) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send("File has been uploaded and saved to the database.");
  });
});

router.get("/avatar/:filename", async (req, res, next) => {
  const { filename } = req.params;
  const avatar = await Avatar.findOne({ fileName: filename });

  if (!avatar) {
    return res.status(404).send("Avatar not found.");
  } else {
    res.send("Avatar Exists!");
  }
});

module.exports = router;
