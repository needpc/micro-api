'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('computers_gpus', [
      { 
        name: 'N/A',
        description: null
      },
      { 
        name: 'Aucune',
        description: null
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('computers_gpus', null, {});
  }
};
