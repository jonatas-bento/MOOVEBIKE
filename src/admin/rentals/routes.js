const express = require('express');
const router = express.Router();
const RentalController = require('./controller')

// ROTAS ADMIN RENTALS
// Lista todos os Rentals fazendo um INNER JOIN Users e Packages
router.get('/rentals', RentalController.list);
// Lista apenas os Rentals que os Users ainda não Ativaram  
router.get('/rentals/pending', RentalController.listPending);
// Lista apenas os Rentals que estão ativos  
router.get('/rentals/active', RentalController.listActives);
// Lista apenas os Rentals já concluídos  
router.get('/rentals/inactive', RentalController.listInactives);
// Ativa um Rental alterando coluna pick_up, drop_off, packActive
router.patch('/rentals/pending/activate', RentalController.activate);
// Desativa um Rental alterando as colunas actual_drop e packActive
router.patch('/rentals/active/desactivate', RentalController.desactivate);

module.exports = router;