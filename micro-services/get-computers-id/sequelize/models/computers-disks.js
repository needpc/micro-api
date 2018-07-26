'use strict';
module.exports = (sequelize, DataTypes) => {
  var computers_disks = sequelize.define('computers_disks', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    computer_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM,
      values: [
        'N/A', 
        'HDD', 
        'SSD'
      ],
      allowNull: true
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    interface: {
      type: DataTypes.STRING(1024),
      allowNull: true
    }
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        computers_disks.belongsTo(models.computers, { onDelete: "CASCADE", foreignKey: 'computer_id' });
      }
    }
  });
  return computers_disks;
};