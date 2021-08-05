const { findAll, findOne, findAllRules } = require('./database');

class Service {

  findAll() {
    return findAll();
  }

  findOne(packId) {
    return findOne(packId);
  }

  //MÉTODOS PARA TABELA PACKINFO

  findAllRules() {
    return findAllRules();
  }
}

const PackService = new Service();

module.exports = PackService;