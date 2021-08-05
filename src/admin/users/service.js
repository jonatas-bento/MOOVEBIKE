const { findAndCountAll, findOne, findByEmail, create, resetPassword, edit, remove, restore } = require('./database');
const { hash } = require('../../libs/crypto')
const mailService = require('../../libs/mail')
const utils = require('../../libs/util')

class Service {

  findAndCountAll(page) {
    return findAndCountAll(page);
  }

  findOne(userId) {
    return findOne(userId);
  }

  findByEmail(userEmail) {
    return findByEmail(userEmail);
  }

  async create(newUser) {
    const password = newUser.password
    newUser.password = hash(newUser.password)
    const result = await create(newUser)

    const text = `Obrigada por se cadastrar ${newUser.name}! Sua senha é: ${password}`
    mailService(newUser.email, 'Cadastro realizado com sucesso', text)
    return result
  }

  async resetPassword(userEmail) {
    const newPassword = utils.generatePassword();
    const cryptoPassword = hash(newPassword);

    await resetPassword(userEmail, cryptoPassword)
    mailService(userEmail, 'Nova Senha', newPassword)
  }

}

const UsersService = new Service();
module.exports = UsersService;