const { verify } = require('../libs/crypto')
const UsersService = require('../admin/users/service')

class AuthService {
  static async authenticate(email, password) {
    try {
      const user = await UsersService.findByEmail(email)
      console.log(user)

      if (user && verify(password, user.password)) {
        return user


      }
      return false
    } catch (err) {
      console.log(err)
      return false
    }
  }
}

module.exports = AuthService
