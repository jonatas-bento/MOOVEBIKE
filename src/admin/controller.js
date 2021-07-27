
const UsersService = require('./users/service')
  
class AdminController {

  static adminPage(req, res) {
    res.render('admin')
  }

  static async deleteUser(req, res) {
    const userId = req.params.id;
    const users = await UsersService.findAll();
    await UsersService.remove(userId);
    res.render('adminUsers', { users })

  }

}

module.exports = AdminController


