const axios = require('axios')
const { sign } = require('../helper/jwt')
const { decode } = require('../helper/bcrypt')
const { User } = require('../models')
const APP_ID = process.env.APP_ID
const TALK_JS_SECRET = process.env.TALK_JS_SECRET
let baseUrl = `https://api.talkjs.com/v1/${APP_ID}/users`
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.AUDIANCE);

class UserController{
  
  static async register(req, res){
    try {
      const payload = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        state: req.body.state
      }

      const user = await User.create(payload)
      const talkJsRegist = await axios.put(
        `${baseUrl}/${user.id}`,
        {
          name: user.name,
          email: [user.email]
        },
        { headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TALK_JS_SECRET}`
        }}
      )
      res.status(201).json({
        id: user.id,
        name: user.name,
        email: user.email
      })
    } catch (error) {
      res.status(500).json(error.message)
    }
  }

  static async login (req, res){
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email
        }
      })
      if(!user){
        res.status(401).json({message: 'Email/Password is Wrong'})
        return
      }
      const passCheck = decode(password, user.password)
      if (!passCheck){
        res.status(401).json({message : 'Email/Password is Wrong'})
        return
      }
      const payload = {
        id: user.id,
        name: user.name,
        email: user.email
      }
      const token = sign(payload)
      res.status(200).json({access_token: token, id: user.id, name:user.name, email: user.email})

    } catch (error) {
      // console.log(error);
      res.status(500).json(error.message)
    }
  } 

  static async oath(req, res, next){
    try {
      const ticket = await client.verifyIdToken({
        idToken: req.body.token,
        audience: process.env.AUDIANCE
      });

      const payload = ticket.getPayload();
      const data = {
        name: payload.name,
        email: payload.email,
        password: '123456',
        gender: 'male',
        state: 'Bandung'
      }
      const user = await User.findOrCreate({
        where: {
          email: payload.email
        },
        defaults: data
      })

      const access_token = sign({
        id: user[0].id,
        email: user[0].email,
        name: user[0].name,
      })

      res.status(200).json({access_token, id: user[0].id, email: user[0].email, name: user[0].name})
    } catch (err) {
      next(err)
    }
  }
}

module.exports = UserController