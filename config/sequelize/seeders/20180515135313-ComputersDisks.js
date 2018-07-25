'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('computers_quests_resps', [
      { 
        quest_id: 1,
        resp: "Jouer",
        indice: 2
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('computers_disks', null, {});
  }
};
