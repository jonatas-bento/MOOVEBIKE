const express = require('express');
const router = express.Router();
const PackController = require('./controller');

//ROTAS DA TABELA PACKAGES
// Lista todos os pacotes 
router.get('/packs', PackController.list);
// Cria um pacote
router.post('/packs', PackController.create);
// Edita um pacote
router.patch('/packs/:packId', PackController.edit);
// Remove um pacote e suas regras da tabela packinfo
router.delete('/packs/:packId', PackController.remove);


//ROTAS PARA TABELA PACKINFO
//Lista todas as regras de um pacote específico
router.get('/packs/:packId/rules', PackController.listRules);
//Cria uma regra para um pacote específico
router.post('/packs/:packId/rules', PackController.createRule);
//Edita uma regra para um pacote específico
router.put('/packs/:packId/rules/:ruleId', PackController.editRule);
// Deleta uma regra para um pacote específico
router.delete('/packs/:packId/rules/:ruleId', PackController.removeRule);


module.exports = router;