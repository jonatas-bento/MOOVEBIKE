const UsersService = require('./service');

class Controller {

  async list(req, res) {
    try {
      const users = await UsersService.findAll()
      res.render('adminUsers', { users })
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async listOne(req, res) {
    try {
      const { userId } = req.params
      const userOne = await UsersService.findOne(userId)
    }
    catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async listByEmail(req, res) {
    try {
      const userEmail = req.body.email
      const user = await UsersService.findByEmail(userEmail)
      return user
    }
    catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

const UsersController = new Controller(UsersService)
module.exports = UsersController