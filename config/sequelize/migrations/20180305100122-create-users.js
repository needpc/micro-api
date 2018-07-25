'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      auth_id: {
        type: Sequelize.INTEGER,
        references: { 
          model: 'users_auth', 
          key: 'id' 
        }
      },
      role: {
        type: Sequelize.ENUM,
        values: ['admin', 'modo', 'user'],
        allowNull: false
      },
      firstname: {
        type: Sequelize.STRING(128),
        allowNull: false
      },
      lastname: {
        type: Sequelize.STRING(256),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: Sequelize.STRING(1024),
        allowNull: false,
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
