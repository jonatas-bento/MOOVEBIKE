'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PackInfo extends Model {

    static associate(models) {
      PackInfo.belongsTo(models.Packages, {
        foreignKey: 'pack_id'
      });
    }
  };
  PackInfo.init({
    rule: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    modelName: 'PackInfo',
    tableName: 'PackInfo'
  });
  return PackInfo;
};