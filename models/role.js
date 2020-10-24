"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate({ User }) {}
  }
  Role.init(
    {
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Role",
    }
  )
  return Role
}
