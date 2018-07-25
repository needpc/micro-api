'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('computers_os', [
      { 
        name: 'N/A' 
      },
      { 
        name: 'Aucun' 
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('computers_os', null, {});
  }
};
