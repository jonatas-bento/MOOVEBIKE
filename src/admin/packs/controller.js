const PackService = require('./service');

class Controller {

  async list(req, res) {
    try {
      const packs = await PackService.findAll();
      packs.length == 0 ?
        res.status(200).json({ message: "No packages registered yet" })
        :
        res.status(200).json(packs);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async create(req, res) {
    const { name, price, period, eletric } = req.body;
    try {
      await PackService.create({ name, price, period, eletric });
      res.status(201).json({ message: "Package added successfully" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async edit(req, res) {
    const packData = {
      id: req.params.packId,
      name: req.body.name,
      price: req.body.price,
      period: req.body.period,
      eletric: req.body.eletric
    }

    try {
      await PackService.edit(packData)
      res.status(201).json({ message: "Package updated successfully" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  // async edit(req, res) {
  //   const { packId } = req.params;
  //   const { name, price, period, eletric } = req.body;
  //   try {
  //     await PackService.edit({ id: packId, name, price, period, eletric });
  //     res.status(201).json({ message: "Package updated successfully" });
  //   } catch (err) {
  //     res.status(400).json({ message: err.message });
  //   }
  // }

  async remove(req, res) {
    const { packId } = req.params
    try {
      const result = await PackService.remove(packId);
      result ?
        res.status(200).json({ message: "Package removed successfully" })
        :
        res.status(200).json({ message: "No Package found to remove" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //MÉTODOS PARA TABELA PACKINFO

  async createRule(req, res) {
    const { packId } = req.params;
    const { rule } = req.body;
    try {
      await PackService.createRule({ rule, packId });
      res.status(201).json({ message: "Package Rule added successfully" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async listRules(req, res) {
    const { packId } = req.params;
    try {
      const rules = await PackService.findAllRules(packId);
      rules.length == 0 ?
        res.status(200).json({ message: "No rules registered for this package yet." })
        :
        res.status(200).json(rules);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async editRule(req, res) {
    const { packId, ruleId } = req.params;
    const { rule } = req.body;
    try {
      await PackService.editRule(packId, ruleId, rule);
      res.status(201).json({ message: "Package rule updated successfully" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async removeRule(req, res) {
    const { packId, ruleId } = req.params;
    try {
      const result = await PackService.removeRule(packId, ruleId);
      result ?
        res.status(200).json({ message: "Package rule removed successfully" })
        :
        res.status(200).json({ message: "No rule found to remove" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}
const PackController = new Controller();

module.exports = PackController;