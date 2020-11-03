"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Priorities", [
      {
        level: "High",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        level: "Medium",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        level: "Low",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Priorities", null, {})
  },
}
