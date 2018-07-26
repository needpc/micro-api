'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('computers_activities', [
        { 
          name: 'N/A',
          description: null 
        },
        { 
          name: 'Gamer',
          description: "Grand joueur de AAA ? Cette categorie est faite pour vous !" 
        },
        { 
          name: 'Bureautique',
          description: "Vous utilisez votre machine pour naviguer, faire vos comptes ? Choisissez cette categorie !" 
        },
        { 
          name: 'Graphiste/Montage Video',
          description: "Un amateur retouche d'images ou videos ?"
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('computers_activities', null, {});
  }
};
