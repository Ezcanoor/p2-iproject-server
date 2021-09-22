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
      console.log(payload);

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
  
  }
}

module.exports = UserController