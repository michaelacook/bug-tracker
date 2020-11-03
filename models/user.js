"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Role, Notification, Project, ProjectUser, Comment }) {
      User.belongsTo(Role, {
        foreignKey: "roleId",
      })
      User.hasMany(Notification, {
        foreignKey: "targetUserId",
      })
      User.hasMany(Notification, {
        foreignKey: "sourceUserId",
      })
      User.belongsToMany(Project, {
        through: ProjectUser,
        foreignKey: "userId",
      })
      User.hasMany(Comment, {
        foreignKey: "userId",
      })
    }
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
