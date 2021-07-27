const { findAll, findOne, create, edit, remove, restore, createRule, findAllRules, editRule, removeRule, restoreRule } = require('./database');

class Service {

  findAll() {
    return findAll();
  }

  findOne(packId) {
    return findOne(packId);
  }

  create(newPack) {
    const { name, price, period, eletric } = newPack;
    return create(name, price, period, eletric);
  }

  edit(packData) {
    return edit(packData);
  }

  remove(packId) {
    return remove(packId);
  }

  //MÉTODOS PARA TABELA PACKINFO
  createRule(packRule) {
    console.log("service create rule")

    const { rule, packId } = packRule;
    return createRule(rule, packId);
  }

  findAllRules(packId) {
    return findAllRules(packId);
  }

  editRule(packId, ruleId, rule) {
    return editRule(packId, ruleId, rule);
  }

  removeRule(packId, ruleId) {
    return removeRule(packId, ruleId);
  }
}

const PackService = new Service();

module.exports = PackService;