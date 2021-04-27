const { getRules } = require('../services/rules');
const { getPackages } = require('../services/packages');
const { getBikes } = require('../services/bikes');


//Controller Home Page

const index = function(req, res) {
    const rules = getRules();
    const packages = getPackages();
    const bikes = getBikes();
    
    res.render('index', {rules, packages, bikes });
  }

const login = function(req, res) {
    res.render('login');
  }

const cadastro = function(req, res) {
    res.render('cadastro');
  }

const faleconosco = function(req, res) {
    res.render('faleconosco');
  }

  const estacoes = function(req, res) {
    res.render('estacoes');
  }

  const planos = function(req, res) {
    const packages = getPackages();
    
    res.render('planos',{packages });
  }

  module.exports = {
      index,
      login,
      cadastro,
      faleconosco,
      estacoes,
      planos
  }