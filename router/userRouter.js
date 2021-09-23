const express = require('express')
const UserController = require('../controller/userController')
const router = express.Router()

router.post('/googlesignin', UserController.oath)
router.post('/login', UserController.login)
router.post('/register', UserController.register)

module.exports = router