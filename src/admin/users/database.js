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

  async edit(userData) {
    const user = await Users.findByPk(userData.id);
    Object.assign(user, userData);
    user.save();
    return user;
  }

  remove(id) {
    return Users.destroy({ where: { id } });
  }

  restore(id) {
    return Users.restore({ where: { id } });
  }
}

const UsersDb = new Database();

module.exports = UsersDb;