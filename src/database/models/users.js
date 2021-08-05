'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {

    static associate(models) {
      Users.hasMany(models.Rentals, {
        foreignKey: 'user_id'
      });
    }
  };
  Users.init({
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    admin: DataTypes.BOOLEAN,
    password: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Users',
  });
  return Users;
};