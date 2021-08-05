'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Users', [{
      name: 'Anne Bortoli',
      email: 'annebortoli@gmail.com',
      admin: true,
      password: '047ffb1b64eed799fc00c518',
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null
    },
    {
      name: 'Flavio Sipoli',
      email: 'flaviomsipoli@gmail.com',
      admin: true,
      password: '047ffb1b64eed799fc00c518',
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null
    },
    {
      name: 'Fluvio Lyebert',
      email: 'Fluvio.sistema@gmail.com',
      admin: true,
      password: '047ffb1b64eed799fc00c518',
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null
    },
    {
      name: 'Jonatas Bento',
      email: 'pr.jmbento@gmail.com',
      admin: true,
      password: '047ffb1b64eed799fc00c518',
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null
    },
    {
      name: 'Li La An Kwon',
      email: 'lilex82@gmail.com',
      admin: true,
      password: '047ffb1b64eed799fc00c518',
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null
    },
    {
      name: 'Lourene Schueler',
      email: 'lourenecamargo@hotmail.com',
      admin: true,
      password: '047ffb1b64eed799fc00c518',
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null
    }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
