function generatePassword() {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var pass = ''
  for (var i = 0; i < 10; i++)
    pass += chars.charAt(Math.random() * 62)
  return pass
}

module.exports = { generatePassword }