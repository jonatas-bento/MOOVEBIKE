const UsersService = require('./service');

class Controller {

  async list(req, res) {
    try {
      const users = await UsersService.findAll()
      users.length == 0 ?
        res.status(200).json({ message: "No users registered yet" })
        :
        res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async listOne(req, res) {
    try {
      const { userId } = req.params
      const userOne = await UsersService.findOne(userId)
      res.status(200).json(userOne)
    }
    catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async listByEmail(req, res) {
    try {
      const userEmail = req.body.email
      const user = await UsersService.findByEmail(userEmail)
      res.status(200).json(user)
    }
    catch (err) {
      res.status(500).json({ message: err.message });
    }
    console.log(userEmail)
  }

  async edit(req, res) {
    const userData = {
      id: req.params.userId,
      name: req.body.name,
      email: req.body.email,
      admin: req.body.admin
    };
    try {
      await UsersService.edit(userData)
      res.status(201).json({ message: "User updated successfully" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async remove(req, res) {
    const { userId } = req.params
    try {
      const result = await UsersService.remove(userId);
      result ?
        res.status(200).json({ message: "Package removed successfully" })
        :
        res.status(200).json({ message: "No User found to remove" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async restore(req, res) {
    const { userId } = req.params;
    try {
      const result = await UsersService.restore(userId);
      result ?
        res.status(200).json({ message: "User restored successfully" })
        :
        res.status(200).json({ message: "No User found to restore" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

const UsersController = new Controller(UsersService)
module.exports = UsersController