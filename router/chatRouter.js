const express = require('express')
const ChatController = require('../controller/chatController')
const router = express.Router()

router.post('/conversation/create', ChatController.createConversation)

module.exports = router