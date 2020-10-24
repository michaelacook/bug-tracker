"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Role, Notification, ProjectUser, Comment }) {}
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      roleId: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "User",
    }
  )
  return User
}
