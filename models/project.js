"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    static associate({ User, ProjectUser, Issue }) {
      Project.belongsToMany(User, {
        through: ProjectUser,
        foreignKey: "projectId",
      })
      Project.hasMany(Issue, {
        foreignKey: "projectId",
      })
    }
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
