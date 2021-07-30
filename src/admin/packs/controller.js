const PackService = require('./service');

class Controller {

  async list(req, res) {
    try {
      const packs = await PackService.findAll();
        res.status(200).json(packs);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //MÉTODOS PARA TABELA PACKINFO
  async listRules(req, res) {
    const { packId } = req.params;
    try {
      const rules = await PackService.findAllRules(packId);
        res.status(200).json(rules);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}
const PackController = new Controller();
module.exports = PackController;