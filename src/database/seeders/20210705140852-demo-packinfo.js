'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('PackInfo', [{
      rule: 'Faça quantas viagens quiser em 24h.',
      pack_id: 1
    },
    {
      rule: 'Perfeito para quem quer um quebra galho!',
      pack_id: 1
    },
    {
      rule: 'Se for de bike elétrica, pague apenas +R$3.00',
      pack_id: 1
    },
    {
      rule: 'Faça quantas viagens quiser por 7 dias.',
      pack_id: 2
    },
    {
      rule: 'Perfeito para quem curte pedalar por aí!',
      pack_id: 2
    },
    {
      rule: 'Se for de bike elétrica, pague apenas +R$5.10',
      pack_id: 2
    },
    {
      rule: 'Faça quantas viagens quiser por 30 dias.',
      pack_id: 3
    },
    {
      rule: 'Perfeito para quem curte pedalar todos os dias!',
      pack_id: 3
    },
    {
      rule: 'Se for de bike elétrica, pague apenas +R$9.10',
      pack_id: 3
    },
    {
      rule: 'Tenha acesso à nossas Mooves o ano inteiro.',
      pack_id: 4
    },
    {
      rule: 'Perfeito para quem não sabe viver sem pedalar!',
      pack_id: 4
    },
    {
      rule: 'Se for de bike elétrica, pague apenas +R$72.10',
      pack_id: 4
    }
    ]);

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('PackInfo', null, {});
  }
};
