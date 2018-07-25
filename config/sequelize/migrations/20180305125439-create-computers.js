'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('computers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      os_id: {
        type: Sequelize.INTEGER,
        references: { 
          model: 'computers_os', 
          key: 'id' 
        },
        allowNull: true,
        defaultValue: 1
      },
      brand_id: {
        type: Sequelize.INTEGER,
        references: { 
          model: 'computers_brands', 
          key: 'id' 
        },
        allowNull: true,
        defaultValue: 1
      },
      cpu_id: {
        type: Sequelize.INTEGER,
        references: { 
          model: 'computers_cpus',
          key: 'id' 
        },
        allowNull: true,
        defaultValue: 1
      },
      gpu_id: {
        type: Sequelize.INTEGER,
        references: { 
          model: 'computers_gpus', 
          key: 'id' 
        },
        allowNull: true,
        defaultValue: 1
      },
      activity_id: {
        type: Sequelize.INTEGER,
        references: { 
          model: 'computers_activities', 
          key: 'id' 
        },
        allowNull: true,
        defaultValue: 1
      },
      chipset_id: {
        type: Sequelize.INTEGER,
        references: { 
          model: 'computers_chipsets', 
          key: 'id' 
        },
        allowNull: true,
        defaultValue: 1
      },
      picture: {
        type: Sequelize.STRING(512),
        allowNull: true
      },
      designation: {
        type: Sequelize.STRING(256),
        allowNull: true,
      },
      model: {
        type: Sequelize.STRING(256),
        allowNull: false,
        unique: 'uniqueTag',
      },
      connector_available: {
        type: Sequelize.STRING(2048),
        allowNull: true,
      },
      weight: {
        type: Sequelize.STRING(16),
        allowNull: true,
      },
      length: {
        type: Sequelize.STRING(16),
        allowNull: true,
      },
      width: {
        type: Sequelize.STRING(16),
        allowNull: true,
      },
      height: {
        type: Sequelize.STRING(16),
        allowNull: true,
      },
      memory_type: {
        type: Sequelize.STRING(128),
        allowNull: true,
      },
      memory_size: {
        type: Sequelize.STRING(128),
        allowNull: true,
      },
      memory_max_size: {
        type: Sequelize.STRING(128),
        allowNull: true,
      },
      keyboard_type: {
        type: Sequelize.STRING(128),
        allowNull: true,
      },
      keyboard_numpad: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      keyboard_light: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      screen_type: {
        type: Sequelize.STRING(256),
        allowNull: true,
      },
      screen_resolution: {
        type: Sequelize.STRING(256),
        allowNull: true,
      },
      screen_refresh_rate: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      screen_size: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      screen_format: {
        type: Sequelize.STRING(16),
        allowNull: true,
      },
      network: {
        type: Sequelize.STRING(128),
        allowNull: true,
      },
      webcam: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('computers');
  }
};