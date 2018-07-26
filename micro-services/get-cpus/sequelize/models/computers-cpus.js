'use strict';
module.exports = (sequelize, DataTypes) => {
  var computers_cpus = sequelize.define('computers_cpus', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    score: {
      type: DataTypes.INTEGER,
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
        // computers_cpus.belongsTo(models.computers_brands);
      }
    }
  });
  return computers_cpus;
};