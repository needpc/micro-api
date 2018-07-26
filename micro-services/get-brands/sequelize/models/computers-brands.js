'use strict';
module.exports = (sequelize, DataTypes) => {
  var computers_brands = sequelize.define('computers_brands', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(512),
      allowNull: true
    }
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {

      }
    }
  });
  return computers_brands;
};