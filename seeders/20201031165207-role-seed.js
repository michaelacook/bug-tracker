"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Roles", [
      {
        role: "Root",
      },
      {
        role: "Admin",
      },
      {
        role: "Project Manager",
      },
      {
        role: "Developer",
      },
      {
        role: "Submitter",
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Roles", null, {})
  },
}
