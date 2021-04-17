//Controller Home Page

const index = function(req, res) {
    res.render('index');
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
    res.render('planos');
  }

  module.exports = {
      index,
      login,
      cadastro,
      faleconosco,
      estacoes,
      planos
  }