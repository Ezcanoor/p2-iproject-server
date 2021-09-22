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

      
    } catch (error) {
      
    }
  }

  static async login (req, res){
  
  }
}

module.exports = UserController