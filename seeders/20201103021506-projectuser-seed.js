"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("ProjectUsers", [
      {
        projectId: 1,
        userId: 2,
      },
      {
        projectId: 1,
        userId: 4,
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("ProjectUsers", null, {})
  },
}
