"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Projects", [
      {
        title: "Bug Tracker",
        description:
          "An issue tracking application for software development teams.",
        projectManager: 3,
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Projects", null, {})
  },
}
