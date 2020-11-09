"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Issue extends Model {
    static associate({ Priority, Project, IssueHistory }) {
      Issue.belongsTo(Priority, {
        foreignKey: "priorityId",
      })
      Issue.belongsTo(Project, {
        foreignKey: "projectId",
      })
      Issue.hasMany(IssueHistory, {
        foreignKey: "issueId",
      })
    }
  }
  Issue.init(
    {
      priorityId: DataTypes.INTEGER,
      projectId: DataTypes.INTEGER,
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
