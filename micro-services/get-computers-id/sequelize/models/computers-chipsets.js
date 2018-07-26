'use strict';
module.exports = (sequelize, DataTypes) => {
  var computers_chipsets = sequelize.define('computers_chipsets', {
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
        // computers_chipsets.belongsTo(models.computers_brands);
      }
    }
  });
  return computers_chipsets;
};