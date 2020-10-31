"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Priorities", [
      {
        level: "High",
      },
      {
        level: "Medium",
      },
      {
        level: "Low",
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface / bulkDelete("Priorities", null, {})
  },
}
