const { getRules } = require('./services/rules');
const { getBikes } = require('./services/bikes');
const PackService = require('./services/packages')
const UsersService = require('../admin/users/service')
const AuthService = require('../auth/auth.service')
const { validationResult } = require('express-validator');


class HomeController {

  static async homePage(req, res) {
    const bikes = getBikes();
    const rules = getRules();
    try {
      const packages = await PackService.getPackages();
      res.render('home', { rules, packages, bikes });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async packagePage(req, res) {
    try {
      const packages = await PackService.getPackages();
      const packRules = await PackService.getPackRule();
      res.render('packages', { packages, packRules });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static stationPage(req, res) {
    res.render('stations')
  }

  static async dashboardPage(req, res) {
    if (!req.session.user) {
      res.redirect('login')
    } else {
      //pega o usuário e envia o usuário junto com a view
      res.render('dashboard')
    }
  }

  static registerPage(req, res) {
    res.render('register')
  }

  static loginPage(req, res) {
    res.render('login')
  }

  static resetPasswordPage(req, res) {
    res.render('resetPassword')
  }

  static contactUsPage(req, res) {
    res.render('contactUs')
  }

  static async doLogin(req, res) {
    const { email, password } = req.body

    try {
      const user = await AuthService.authenticate(email, password)
      if (!user) {
        return res.render('login', { error: 'Usuário ou senha inválidos' })
      }
      req.startSession(user)
      res.redirect('/')
    } catch (err) {
      console.log(err)
      res.render('login', { error: 'Erro inesperado' })
    }
  }

  static async doResetPassword(req, res) {
    const userEmail = req.body.email
    console.log(req.body)
    const user = await UsersService.findByEmail(userEmail)
    console.log(user)
    try {
      if (!user) {
        return res.render('register', { error: 'Faça seu cadastro!' })
      }
      await UsersService.resetPassword(userEmail)
      res.redirect('/login')

    } catch (err) {
      console.log(err)
      res.render('register', { error: 'Erro inesperado' })
    }
  }

  static doLogout(req, res) {
    req.session.destroy()
    res.redirect('/')
  }

  static async doRegister(req, res) {
    try {
      const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }
      let err = validationResult(req)
      if (err.isEmpty())
        await UsersService.create(newUser)

      req.startSession(newUser)

      res.redirect('/')
    } catch (err) {
      console.log(err)
      res.render('register', { error: err.message })
    }
  }
}

module.exports = HomeController


