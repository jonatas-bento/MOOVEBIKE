const express = require('express');
const router = express.Router();
const controller = require('../controllers/index')

/* GET home page. */
router.get('/', controller.index);

/* GET Login. */
router.get('/login', controller.login);

/* GET Cadastro. */
router.get('/cadastro', controller.cadastro);

/* GET Fale Conosco */
router.get('/faleconosco', controller.faleconosco);

/* GET Locais e Estações */
router.get('/estacoes', controller.estacoes);

/* GET Planos disponíveis */
router.get('/planos', controller.planos);


module.exports = router;
