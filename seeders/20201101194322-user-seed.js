"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        firstName: "root",
        lastName: "",
        // 12 rounds to generate
        password:
          "$2y$12$F1Noc7NZPfVNvORuuIX0g./TLS36y34adxbpylfxpDeXCkEizROY6",
        email: "rootuser@email.com",
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Michael",
        lastName: "Cook",
        // 12 rounds
        password:
          "$2y$12$ToGwHREhW9cmu83GcKISH.li.3XgI5nrzwMYX.c/NZ1jX40Rqbu2.",
        email: "mcook0775@gmail.com",
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Demo",
        lastName: "ProjectManager",
        password: "demoprojectmanager",
        email: "demoprojectmanager@email.com",
        roleId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Demo",
        lastName: "Developer",
        password: "demodeveloper",
        email: "demodeveloper@email.com",
        roleId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Demo",
        lastName: "Submitter",
        password: "demosubmitter",
        email: "demosubmitter@email.com",
        roleId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {})
  },
}
