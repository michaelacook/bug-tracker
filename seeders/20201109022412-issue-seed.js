"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Issues", [
      {
        priorityId: 1,
        projectId: 1,
        title: "Test Issue",
        description: "A test issue.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Issues", null, {})
  },
}
