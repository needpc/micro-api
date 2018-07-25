'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('computers_cpus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(128),
        allowNull: false
      },
      score: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      description: {
        type: Sequelize.STRING(512),
        allowNull: true
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('computers_cpus');
  }
};