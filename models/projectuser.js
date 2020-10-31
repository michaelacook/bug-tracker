"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class ProjectUser extends Model {}
  ProjectUser.init(
    {
      projectId: DataTypes.NUMBER,
      userId: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "ProjectUser",
    }
  )
  return ProjectUser
}
