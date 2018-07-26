'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('computers_quests_resps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quest_id: {
        type: Sequelize.INTEGER,
        references: { 
          model: 'computers_quests', 
          key: 'id' 
        },
        allowNull: false
      },
      resp: {
        type: Sequelize.STRING(64),
        allowNull: false
      },
      indice: {
        type: Sequelize.STRING(512),
        allowNull: true
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('computers_quests_resps');
  }
};