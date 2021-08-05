'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Packages', [{
      name: 'DIÁRIO',
      price: 9.0,
      period: "Passe Diário",
      electric: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'RELAX',
      price: 16.9,
      period: "Plano Semanal",
      electric: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'MOOVE',
      price: 29.9,
      period: "Plano Mensal",
      electric: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'SUPER MOOVE',
      price: 239.9,
      period: "Plano Anual",
      electric: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'E-Diário',
      price: 12.0,
      period: "Passe Diário",
      electric: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'E-Relax',
      price: 22.0,
      period: "Plano Semanal",
      electric: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'E-Moove',
      price: 39.0,
      period: "Plano Mensal",
      electric: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'E-SuperMoove',
      price: 312.0,
      period: "Plano Anual",
      electric: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Packages', null, {});
  }
};
