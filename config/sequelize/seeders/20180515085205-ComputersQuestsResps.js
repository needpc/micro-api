'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('computers_quests_resps', [
      { 
        quest_id: 1,
        resp: "Jouer",
        indice: 2
      },
      { 
        quest_id: 1,
        resp: "Bureautique",
        indice: 3
      },
      { 
        quest_id: 1,
        resp: "Multimédia",
        indice: 4
      },
      { 
        quest_id: 2,
        resp: "Assassin's Creed",
        indice: 13
      },
      { 
        quest_id: 2,
        resp: "Minecraft",
        indice: 15
      },
      { 
        quest_id: 2,
        resp: "Vermintide 2",
        indice: 17
      },
      { 
        quest_id: 3,
        resp: "Google Chrome (ou autre)",
        indice: 6700
      },
      { 
        quest_id: 3,
        resp: "VLC",
        indice: 5800
      },
      { 
        quest_id: 3,
        resp: "Netflix (Streaming)",
        indice: 5600
      },
      { 
        quest_id: 3,
        resp: "Microsoft Office",
        indice: 5600
      },
      { 
        quest_id: 3,
        resp: "Tous",
        indice: 6100
      },
      { 
        quest_id: 4,
        resp: "Adobe Photoshop",
        indice: 9500
      },
      { 
        quest_id: 4,
        resp: "Adobe Premiere",
        indice: 8700
      },
      { 
        quest_id: 4,
        resp: "Cubase",
        indice: 8900
      },
      { 
        quest_id: 5,
        resp: "13 pouces",
        indice: 13
      },
      { 
        quest_id: 5,
        resp: "15 pouces",
        indice: 15
      },
      { 
        quest_id: 5,
        resp: "17 pouces",
        indice: 17
      },
      { 
        quest_id: 6,
        resp: "Minimale",
        indice: 4000
      },
      { 
        quest_id: 6,
        resp: "Moyenne",
        indice: 8000
      },
      { 
        quest_id: 6,
        resp: "Haute",
        indice: 12000
      },
      { 
        quest_id: 7,
        resp: "Moins de 300€",
        indice: 150
      },
      { 
        quest_id: 7,
        resp: "Entre 300€ et 600€",
        indice: 450
      },
      { 
        quest_id: 7,
        resp: "600€ et 900€",
        indice: 750
      },
      { 
        quest_id: 7,
        resp: "Plus de 1000€",
        indice: 1050
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('computers_quests_resps', null, {});
  }
};
