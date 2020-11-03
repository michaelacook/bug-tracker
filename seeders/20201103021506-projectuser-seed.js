"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("ProjectUsers", [
      {
        projectId: 1,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        projectId: 1,
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("ProjectUsers", null, {})
  },
}
