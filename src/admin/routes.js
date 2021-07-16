const express = require('express');
const router = express.Router();
const AdminController = require('./controller')
const RentalController = require('./rentals/controller')
const PackController = require('./packs/controller')
const UsersController = require('./users/controller')


router.get('/', AdminController.adminPage);

//ROTAS PARA TABELA RENTALS
router.get('/rentals', RentalController.list);
router.get('/rentals/pending', RentalController.listPending);
router.get('/rentals/active', RentalController.listActives);
router.get('/rentals/inactive', RentalController.listInactives);
router.patch('/rentals/pending/activate', RentalController.activate);
router.patch('/rentals/active/desactivate', RentalController.desactivate);


//ROTAS PARA TABELA PACKAGES
router.get('/packs', PackController.list);
router.post('/packs', PackController.create);
router.patch('/packs/:packId', PackController.edit);
router.delete('/packs/:packId', PackController.remove);


//ROTAS PARA TABELA PACKINFO
router.get('/packs/:packId/rules', PackController.listRules);
router.post('/packs/:packId/rules', PackController.createRule);
router.put('/packs/:packId/rules/:ruleId', PackController.editRule);
router.delete('/packs/:packId/rules/:ruleId', PackController.removeRule);

router.get('/users', UsersController.list);
router.get('/users/:userId', UsersController.listOne);
router.delete('/users/:userId', UsersController.remove);
router.post('/users/:userId', UsersController.restore);
router.patch('/users/:userId', UsersController.edit);

module.exports = router;
