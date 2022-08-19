const express = require('express')
const router = express.Router()
const {
  registerUser,
  loginUser,
  getMe,
  resetPassword, 
  oldUser
} = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.put('/resetPassword/:id', resetPassword)
router.post('/email', oldUser)
router.get('/me', protect, getMe)

module.exports = router
