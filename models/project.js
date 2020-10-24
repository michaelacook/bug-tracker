"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    static associate({ ProjectUser, Issue }) {}
  }
  Project.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      projectManager: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "Project",
    }
  )
  return Project
}
