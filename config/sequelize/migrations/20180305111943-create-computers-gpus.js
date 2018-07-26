'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('computers_gpus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      score: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      memory_type: {
        type: Sequelize.STRING(256),
        allowNull: true
      },
      max_memory: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      description: {
        type: Sequelize.STRING(1024),
        allowNull: true
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('computers_gpus');
  }
};