"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Roles", [
      {
        role: "Root",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role: "Admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role: "Project Manager",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role: "Developer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role: "Submitter",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Roles", null, {})
  },
}
