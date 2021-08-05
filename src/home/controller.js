const { getRules } = require('./services/rules');
const { getBikes } = require('./services/bikes');
const RentalService = require('../admin/rentals/service');
const PackService = require('../admin/packs/service');
const UsersService = require('../admin/users/service');
const AuthService = require('../auth/auth.service');
const { validationResult } = require('express-validator');


class HomeController {

  static async homePage(req, res) {
    const bikes = getBikes();
    const rules = getRules();
    try {
      const packages = await PackService.findAll();
      res.render('home', { rules, packages, bikes });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async packagePage(req, res) {
    try {
      const packages = await PackService.findAll();
      const packRules = await PackService.findAllRules();
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
      try {
        const userId = req.session.user.id;
        const activeRental = await RentalService.findOne(userId);
        const packId = activeRental.pack_id
        const pack = await PackService.findOne(packId)

        res.render('dashboard', { activeRental, pack });
      }
      catch (err) {
        res.render('message', { message: 'Você não tem plano ativo ou pendente de ativação!' })
      }
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

  static async cartPage(req, res) {
    if (!req.session.user) {
      res.render('login')
    } else {
      const packId = req.params.id;
      try {
        const chosenPack = await PackService.findOne(packId);
        res.render('cart', { chosenPack })
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    }
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
      res.status(500).json({ message: err.message });
    }
  }

  static async doResetPassword(req, res) {
    const userEmail = req.body.email
    const user = await UsersService.findByEmail(userEmail)
    try {
      if (!user) {
        return res.render('register', { error: 'Faça seu cadastro!' })
      }
      await UsersService.resetPassword(userEmail)
      return res.render('login', { message: 'Senha enviada com sucesso!' })
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static doLogout(req, res) {
    req.session.destroy()
    res.redirect('/')
  }

  static async doRegister(req, res) {
    const newUser = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }
    try {
      let errors = validationResult(req)
      if (!errors.isEmpty()) {
        res.render('register', { errors: errors.mapped() })
      } else {
        const user = await UsersService.create(newUser)
        req.startSession(user)
        res.redirect('/')
      }
    } catch (err) {
      res.render('register', { error: 'Email já cadastrado!' })
    }
  }

  static async createRental(req, res) {
    const userId = req.session.user.id;
    const packId = req.params.id;

    try {
      const activePack = await RentalService.findOne(userId);

      if (activePack) {
        res.render('message', { message: 'Você tem um plano ativo!' })
      } else {
        await RentalService.create(userId, packId);
        res.render('message', { message: 'Pacote comprado com sucesso!' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

}

module.exports = HomeController