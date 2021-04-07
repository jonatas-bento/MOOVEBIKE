var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET Login. */
router.get('/login', function(req, res, next) {
  res.render('login');
});

/* GET Cadastro. */
router.get('/cadastro', function(req, res, next) {
  res.render('cadastro');
});

/* GET Fale Conosco */
router.get('/faleconosco', function(req, res, next) {
  res.render('faleconosco');
});

/* GET Locais e Estações */
router.get('/estacoes', function(req, res, next) {
  res.render('estacoes');
});

/* GET Planos disponíveis */
router.get('/planos', function(req, res, next) {
  res.render('planos');
});
module.exports = router;
