const bcrypt = require('bcrypt');

const encode = (password) => {
  const salt = bcrypt.genSaltSync(12);
  return bcrypt.hashSync(password, salt);
  
}

const decode = (password, hashPasword) => {
  return bcrypt.compareSync(password, hashPasword);
}

module.exports = {decode, encode}