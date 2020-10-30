"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Issue extends Model {
    static associate({ Priority, Project, IssueHistory }) {}
  }
  Issue.init(
    {
      priorityId: DataTypes.NUMBER,
      projectId: DataTypes.NUMBER,
      title: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Issue",
    }
  )
  return Issue
}
