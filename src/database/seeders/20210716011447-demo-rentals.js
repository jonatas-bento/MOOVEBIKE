'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Rentals', [
      {
        user_id: 1,
        pack_id: 1,
        pick_up: null,
        drop_off: null,
        actual_drop: null,
        packActive: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        pack_id: 2,
        pick_up: "2021-07-14 15:19:25",
        drop_off: "2021-07-21 15:19:25",
        actual_drop: null,
        packActive: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 3,
        pack_id: 3,
        pick_up: "2021-06-14 15:19:25",
        drop_off: "2021-07-14 15:19:25",
        actual_drop: "2021-07-14 15:19:25",
        packActive: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 4,
        pack_id: 6,
        pick_up: "2021-07-01 15:19:25",
        drop_off: "2021-07-08 15:19:25",
        actual_drop: "2021-07-10 15:19:25",
        packActive: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Rentals', null, {});
  }
};
