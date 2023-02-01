const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
  resetpassword,
  oldUser,
  updateUserProfile,
  resetpasswordToken,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.post("/resetpassword", resetpassword);
router.post("/resetpassword/:token", resetpasswordToken);
router.post("/email", oldUser);
router.get("/me", protect, getMe);
router.route("/profile").post(protect, updateUserProfile);

module.exports = router;
