'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('computers_brands', [
      { 
        name: 'N/A' 
      },
      { 
        name: 'Aucune' 
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('computers_brands', null, {});
  }
};
