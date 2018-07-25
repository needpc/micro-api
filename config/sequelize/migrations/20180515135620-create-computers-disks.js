'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('computers_disks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      computer_id: {
        type: Sequelize.INTEGER,
        references: { 
          model: 'computers', 
          key: 'id'
        },
        allowNull: false
      },
      type: {
        type: Sequelize.ENUM,
        values: ['N/A', 'HDD', 'SSD'],
        allowNull: true
      },
      size: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      interface: {
        type: Sequelize.STRING(1024),
        allowNull: true
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('computers_disks');
  }
};
