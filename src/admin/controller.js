
class AdminController {

  static adminPage(req, res) {
    res.render('admin')
  }

  static adminUsersPage(req, res) {
    res.render('adminUsers')
  }

  static adminPackagesPage(req, res) {
    res.render('adminPackages')
  }

  static adminRentalsPage(req, res) {
    res.render('adminRentals')
  }
}

module.exports = AdminController


