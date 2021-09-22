const axios = require('axios')
const APP_ID = process.env.APP_ID
const TALK_JS_SECRET = process.env.TALK_JS_SECRET
let baseUrl = `https://api.talkjs.com/v1/${APP_ID}`

class ChatController{
  static  async createConversation(req, res){
      try {
        
        const conversationId = req.body.conversationId
        const chat = await axios.put(
          `${baseUrl}/conversations/${conversationId}`,
          {
            participants: [`${req.user.id}`],
            subject: req.body.subject,
            welcomeMessages: [req.body.welcomeMessages],
          },
          { headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${TALK_JS_SECRET}`
          }}
        )
        res.status(200).json({message: 'success created/updated conversation'})
      } catch (error) {
        res.status(500).json(error.message)
      }

  }

  
}

module.exports = ChatController
