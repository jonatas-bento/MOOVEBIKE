const { Packages, PackInfo } = require('../../database/models');

class Database {

  findAll() {
    return Packages.findAll();
  }

  create(name, price, period, eletric) {
    const result = Packages.create(
      {
        name,
        price,
        period,
        eletric
      })
    return result
  }

  async edit(packData) {
    const pack = await Packages.findByPk(packData.id);
    Object.assign(pack, packData);
    pack.save();
    return pack;
  }

  // edit(id, name, price, period, eletric) {
  //   const result = Packages.update(
  //     {
  //       id,
  //       name,
  //       price,
  //       period,
  //       eletric
  //     },
  //     {
  //       where: { id: id }
  //     });
  //   return result;
  // }

  remove(packId) {

    return Packages.destroy(
      {
        where: { id: packId }
      });
  }

  //MÉTODOS PARA TABELA PACKINFO
  createRule(rule, packId) {
    const result = PackInfo.create(
      {
        rule,
        pack_id: packId
      });
    return result;
  }

  findAllRules(packId) {
    return PackInfo.findAll(
      {
        where: { pack_id: packId }
      });
  }

  editRule(packId, ruleId, rule) {
    return PackInfo.update(
      {
        rule
      },
      {
        where: {
          id: ruleId,
          pack_id: packId
        }
      });
  }

  removeRule(packId, ruleId) {
    return PackInfo.destroy(
      {
        where: { id: ruleId, pack_id: packId }
      });
  }
}

const PacksDatabase = new Database();

module.exports = PacksDatabase;