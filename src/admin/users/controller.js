const UsersService = require('./service');
const mailService = require('../../libs/mail');

class Controller {

  async list(req, res) {
    const { page = 1 } = req.query
    try {
      const { users, pageTotal } = await UsersService.findAndCountAll(page)
      res.render('adminUsers', { users, pageTotal })
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async listOne(req, res) {
    try {
      const { userId } = req.params
      const user = await UsersService.findOne(userId);
      return user
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