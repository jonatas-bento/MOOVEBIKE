const { check } = require('express-validator');

const validateRegister = [

  check('name')
    .notEmpty().withMessage('Deve preencher o nome').bail()
    .isLength({ min: 3 }).withMessage('O nome deve conter no mínimo 3 caracteres'),
  check('email')
    .notEmpty().withMessage('Deve preencher o email').bail()
    .isEmail().withMessage('Deve inserir um email válido'),
  check('password')
    .notEmpty().withMessage('Deve preencher a senha').bail()
    .isLength({ min: 5 }).withMessage('A senha deve ter no mínimo 5 caracteres')
]


module.exports = {
  validateRegister
}