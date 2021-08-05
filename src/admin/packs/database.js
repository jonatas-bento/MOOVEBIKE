const { Packages, PackInfo } = require('../../database/models');

class Database {

  findAll() {
    return Packages.findAll();
  }

  findOne(packId) {
    return Packages.findByPk(packId);
  }

  //MÉTODOS PARA TABELA PACKINFO

  findAllRules() {
    return PackInfo.findAll()
    // {
    //   where: { pack_id: packId }
    // });
  }
}

const PacksDatabase = new Database();

module.exports = PacksDatabase;