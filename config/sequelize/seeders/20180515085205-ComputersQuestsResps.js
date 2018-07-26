'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('computers_quests_resps', [
      { 
        quest_id: 1,
        resp: "Jouer",
        indice: "activity=2"
      },
      { 
        quest_id: 1,
        resp: "Bureautique",
        indice: "activity=3"
      },
      { 
        quest_id: 1,
        resp: "Multimédia",
        indice: "activity=2&activity=4"
      },
      { 
        quest_id: 2,
        resp: "Assassin's Creed",
        indice: "cpu_score_min=8500&cpu_score_max=12500"
      },
      { 
        quest_id: 2,
        resp: "Minecraft",
        indice: "cpu_score_min=6500&cpu_score_max=8500"
      },
      { 
        quest_id: 2,
        resp: "Vermintide 2",
        indice: "cpu_score_min=7500&cpu_score_max=10500"
      },
      { 
        quest_id: 3,
        resp: "Google Chrome (ou autre)",
        indice: "cpu_score_min=7000&cpu_score_max=8700"
      },
      { 
        quest_id: 3,
        resp: "VLC",
        indice: "cpu_score_min=6000&cpu_score_max=8000"
      },
      { 
        quest_id: 3,
        resp: "Netflix (Streaming)",
        indice: "cpu_score_min=5000&cpu_score_min=8000"
      },
      { 
        quest_id: 3,
        resp: "Microsoft Office",
        indice: "cpu_score_min=4000&cpu_score_max=6500"
      },
      { 
        quest_id: 3,
        resp: "Tous",
        indice: "cpu_score_min=9300&cpu_score_min=11000"
      },
      { 
        quest_id: 4,
        resp: "Adobe Photoshop",
        indice: "cpu_score_min=8700&cpu_score_max=12000"
      },
      { 
        quest_id: 4,
        resp: "Adobe Premiere",
        indice: "cpu_score_min=9500&cpu_score_max=14500"
      },
      { 
        quest_id: 4,
        resp: "Cubase",
        indice: "cpu_score_min=7700&cpu_score_max=9000"
      },
      { 
        quest_id: 5,
        resp: "13 pouces",
        indice: "screen=13"
      },
      { 
        quest_id: 5,
        resp: "15 pouces",
        indice: "screen=15"
      },
      { 
        quest_id: 5,
        resp: "17 pouces",
        indice: "screen=17&screen=17.3"
      },
      {
        quest_id: 6,
        resp: "Peu importe",
        indice: null
      },
      {
        quest_id: 6,
        resp: "Macintosh (Apple)",
        indice: "os_id=21"
      },
      {
        quest_id: 6,
        resp: "Windows (Microsoft)",
        indice: "os_id=2"
      },
      { 
        quest_id: 7,
        resp: "Moins de 500€",
        indice: "price_min=0&price_max=500"
      },
      { 
        quest_id: 7,
        resp: "Entre 500€ et 1000€",
        indice: "price_min=500&price_max=900"
      },
      { 
        quest_id: 7,
        resp: "1000€ et 1500€",
        indice: "price_min=1000&price_max=1500"
      },
      { 
        quest_id: 7,
        resp: "Plus de 1500€",
        indice: "price_min=1500&price_max=20000"
      },
      { 
        quest_id: 8,
        resp: "moins de 1.2 kg",
        indice: "weight_min=0.7&weight_max=1.2"
      },
      { 
        quest_id: 8,
        resp: "moins de 2.0 kg",
        indice: "weight_min=1&weight_max=2"
      },
      { 
        quest_id: 8,
        resp: "moins de 3.0 kg",
        indice: "weight_min=1.8&weight_max=3"
      },
      { 
        quest_id: 8,
        resp: "Peu importe",
        indice: null
      },
      {
        quest_id: 9,
        resp: "Minimum",
        indice: "gpu_score_min=2&gpu_score_max=7"
      },
      {
        quest_id: 9,
        resp: "Moyen",
        indice: "gpu_score_min=8&gpu_score_max=12"
      },
      {
        quest_id: 9,
        resp: "Haut",
        indice: "gpu_score_min=13&gpu_score_max=22"
      },
      {
        quest_id: 9,
        resp: "Ultra",
        indice: "gpu_score_min=22&gpu_score_max=100"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('computers_quests_resps', null, {});
  }
};
