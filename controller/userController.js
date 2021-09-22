const { sign } = require('../helper/jwt')
const { decode } = require('../helper/bcrypt')
const { User } = require('../models')

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
      res.status(200).json({access_token: token})

    } catch (error) {
      // console.log(error);
      res.status(500).json(error.message)
    }
  } 
}

module.exports = UserController