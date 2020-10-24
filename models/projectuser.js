"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class ProjectUser extends Model {
    static associate({ Project, User }) {}
  }
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
