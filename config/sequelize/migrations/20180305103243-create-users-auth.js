'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users_auth', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
      	type: Sequelize.STRING(32),
      	allowNull: false
      },
      description: {
        type: Sequelize.STRING(128),
        allowNull: true,
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users_auth');
  }
};