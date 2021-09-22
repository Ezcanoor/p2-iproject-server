const express = require('express')
const { authentication } = require('../middleware/authentication')
const router = express.Router()
const userRouter = require('./userRouter')
const chatRouter = require('./chatRouter')

router.use(userRouter)
router.use(authentication)
router.get('/customer', (req, res) => {
  res.send('hellow')
})
router.use(chatRouter)

module.exports = router