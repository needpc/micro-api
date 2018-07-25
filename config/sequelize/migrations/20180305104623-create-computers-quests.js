'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('computers_quests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      activity_id: {
        type: Sequelize.INTEGER,
        references: { 
          model: 'computers_activities', 
          key: 'id' 
        },
        allowNull: false
      },
      rank: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      quest: {
		    type: Sequelize.STRING(512),
        allowNull: false
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('computers_quests');
  }
};