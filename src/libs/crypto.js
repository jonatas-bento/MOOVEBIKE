const crypto = require('crypto')
const SALT = 'salt-hash'

const hash = password => {
  const cryptoPassword = crypto.scryptSync(password, SALT, 12)
  return cryptoPassword.toString('hex')
}

const verify = (password, cryptoPassword) => hash(password) === cryptoPassword

module.exports = {
  hash,
  verify
}
