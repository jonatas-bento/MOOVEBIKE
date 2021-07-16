const { Packages, PackInfo } = require('../../database/models');
class Service {
  getPackages() {
    return Packages.findAll();
  }
  getPackRule() {
    return PackInfo.findAll()
  }
}
const PackService = new Service();
module.exports = PackService;