const express = require('express');
const router = express.Router();
const HomeController = require('./controller');
const { validateRegister } = require('../middleware/registerValidation');

/* Home Pages */
router.get('/', HomeController.homePage);
router.get('/packages', HomeController.packagePage);
router.get('/stations', HomeController.stationPage);
router.get('/dashboard', HomeController.dashboardPage);
router.get('/register', HomeController.registerPage);
router.get('/login', HomeController.loginPage);
router.get('/resetPassword', HomeController.resetPasswordPage)
router.get('/contactUs', HomeController.contactUsPage);

router.post('/login', HomeController.doLogin)
router.get('/logout', HomeController.doLogout)

router.get('/cart/:id', HomeController.cartPage)
router.post('/cart/:id', HomeController.createRental);

router.post('/register', validateRegister, HomeController.doRegister);

router.post('/resetPassword', HomeController.doResetPassword)

module.exports = router;
