const express = require('express')
const { authentication } = require('../middleware/authentication')
const router = express.Router()
const userRouter = require('./userRouter')

router.use(userRouter)
router.use(authentication)

module.exports = router