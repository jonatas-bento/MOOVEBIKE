'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PackInfo', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rule: {
        type: Sequelize.STRING
      },
      pack_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Packages', key: 'id' },
        onDelete: 'CASCADE'
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PackInfo');
  }
};