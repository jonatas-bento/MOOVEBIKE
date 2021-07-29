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

  //MÉTODOS PARA TABELA PACKINFO

  async listRules(req, res) {
    const { packId } = req.params;
    try {
      const rules = await PackService.findAllRules(packId);
      res.render('adminPacks', { rules })
      rules.length == 0 ?
        res.status(200).json({ message: "No rules registered for this package yet." })
        :
        res.status(200).json(rules);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}
const PackController = new Controller();
module.exports = PackController;