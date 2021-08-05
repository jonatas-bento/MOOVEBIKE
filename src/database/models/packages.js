'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Packages extends Model {
    static associate(models) {
      Packages.hasMany(models.PackInfo, {
        foreignKey: 'pack_id'
      })
    }

    static associate(models) {
      Packages.hasMany(models.Rentals, {
        foreignKey: 'pack_id'
      })
    }
  };
  Packages.init({
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    period: DataTypes.STRING,
    electric: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Packages',
  });
  return Packages;
};