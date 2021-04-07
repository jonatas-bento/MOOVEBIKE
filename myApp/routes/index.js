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

module.exports = router;
