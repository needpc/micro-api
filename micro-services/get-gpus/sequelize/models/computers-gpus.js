'use strict';
module.exports = (sequelize, DataTypes) => {
  var computers_gpus = sequelize.define('computers_gpus', {
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
    memory_type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    max_memory: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(1024),
      allowNull: false
    },
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return computers_gpus;
};