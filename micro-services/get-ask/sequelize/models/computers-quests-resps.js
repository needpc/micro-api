'use strict';
module.exports = (sequelize, DataTypes) => {
  var computers_quests_resps = sequelize.define('computers_quests_resps', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    quest_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    resp: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    indice: {
      type: DataTypes.STRING(32),
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
  return computers_quests_resps;
};