const express = require('express');
const router = express.Router();
const AdminController = require('./controller')
const RentalController = require('./rentals/controller')
const PackController = require('./packs/controller')
const UsersController = require('./users/controller')

//ROTA AREA ADMINISTRATIVA
router.get('/', AdminController.adminPage);

//ROTAS PARA TABELA RENTALS
router.get('/rentals', RentalController.list);
router.get('/rentals/pending', RentalController.listPending);
router.get('/rentals/active', RentalController.listActives);
router.get('/rentals/inactive', RentalController.listInactives);
router.patch('/rentals/pending/:id/activate', RentalController.activate);
router.patch('/rentals/active/:id/desactivate', RentalController.desactivate);

//ROTA PARA TABELA PACKAGES
router.get('/packs', PackController.list);

//ROTA PARA TABELA PACKINFO
router.get('/packs/:packId/rules', PackController.listRules);

//ROTAS PARA TABELA USERS
router.get('/users', UsersController.list);
router.get('/users/:userId', UsersController.listOne);

module.exports = router;
