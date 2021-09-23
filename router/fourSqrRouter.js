const express = require('express')
const HotelController = require('../controller/fourSqrController')
const router = express.Router()

router.get('/hotel/list', HotelController.list)

module.exports = router