const express = require('express')
const { authentication } = require('../middleware/authentication')
const router = express.Router()
const userRouter = require('./userRouter')
const charRouter = require('./chatRouter')

router.use(userRouter)
router.use(authentication)
router.use(charRouter)
module.exports = router