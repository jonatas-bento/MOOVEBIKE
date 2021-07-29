const { Users } = require('../../database/models');

class Database {

  findAll() {
    return Users.findAll();
  }

  findOne(id) {
    return Users.findOne({
      where: { id: id }
    });
  }

  findByEmail(userEmail) {
    return Users.findOne({
      where: { email: userEmail }
    });
  }

  async create(name, email, cryptoPassword) {
    const result = await Users.create(name, email, cryptoPassword);
    return result
  }

  async resetPassword(userEmail, cryptoPassword) {
    const result = await Users.update({ password: cryptoPassword }, { where: { email: userEmail } })
    return result
  }
}

const UsersDb = new Database();
module.exports = UsersDb;