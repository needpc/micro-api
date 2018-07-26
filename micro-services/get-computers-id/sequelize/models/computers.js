'use strict';
module.exports = (sequelize, DataTypes) => {
  var computers = sequelize.define('computers', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    os_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    cpu_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    gpu_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    activity_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    chipset_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    model: {
      type: DataTypes.STRING(256),
      allowNull: false,
      unique: 'uniqueTag',
    },
    picture: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    connector_available: {
      type: DataTypes.STRING(2048),
      allowNull: true,
    },
    weight: {
      type: DataTypes.STRING(16),
      allowNull: true,
    },
    length: {
      type: DataTypes.STRING(16),
      allowNull: true,
    },
    width: {
      type: DataTypes.STRING(16),
      allowNull: true,
    },
    height: {
      type: DataTypes.STRING(16),
      allowNull: true,
    },
    memory_size: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    memory_type: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    memory_max_size: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    keyboard_type: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    keyboard_numpad: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    keyboard_light: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    screen_type: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },
    screen_resolution: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },
    screen_refresh_rate: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    screen_size: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    screen_format: {
      type: DataTypes.STRING(16),
      allowNull: true,
    },
    network: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    webcam: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    wifi: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        computers.belongsTo(models.computers_os, { as: 'os', onDelete: "CASCADE", foreignKey: 'os_id' });
        computers.belongsTo(models.computers_cpus, { as: 'cpu', onDelete: "CASCADE", foreignKey: 'cpu_id' });
        computers.belongsTo(models.computers_gpus, { as: 'gpu', onDelete: "CASCADE", foreignKey: 'gpu_id' });
        computers.belongsTo(models.computers_activities, { as: 'activity', onDelete: "CASCADE", foreignKey: 'activity_id' });
        computers.belongsTo(models.computers_chipsets, { as: 'chipset', onDelete: "CASCADE", foreignKey: 'chipset_id' });
        computers.belongsTo(models.computers_brands, { as: 'brand', onDelete: "CASCADE", foreignKey: 'brand_id' });
        computers.hasMany(models.computers_prices, { as: 'prices', onDelete: 'CASCADE', foreignKey: 'computer_id' });
        models.computers_prices.belongsTo(computers, { as: 'prices', foreignKey: 'computer_id'});
        computers.hasMany(models.computers_disks, { as: 'disks', onDelete: 'CASCADE', foreignKey: 'computer_id' });
        models.computers_disks.belongsTo(computers, { as: 'disks', foreignKey: 'computer_id'});
      }
    }
  });
  return computers;
};