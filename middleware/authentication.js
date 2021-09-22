const { verify } = require("../helper/jwt")

const authentication = (req, res, next) => {

  try {
    const token = req.headers.access_token;
    const checkToken = verify(token)
    if (!checkToken){
      res.status(403).json({message : 'Do me a favor, pls login with registered user'})
      return
    }

    req.user = { 
      id: checkToken.id,
      name: checkToken.name,
      email: checkToken.email
    }
    next()
  } catch (error) {
    res.status(500).json(error.message)
  }
  
}

module.exports = {authentication}