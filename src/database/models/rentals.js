'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rentals extends Model {

    static associate(models) {
      Rentals.belongsTo(models.Users, {
        foreignKey: 'user_id'
      })
    }

    static associate(models) {
      Rentals.belongsTo(models.Packages, {
        foreignKey: 'pack_id'
      })
    }
  };
  Rentals.init({
    pick_up: DataTypes.DATE,
    drop_off: DataTypes.DATE,
    actual_drop: DataTypes.DATE,
    packActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Rentals',
  });
  return Rentals;
};