"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class IssueHistory extends Model {
    static associate({ Issue }) {
      IssueHistory.belongsTo(Issue, {
        foreignKey: "issueId",
      })
    }
  }
  IssueHistory.init(
    {
      issueId: DataTypes.NUMBER,
      previousValue: DataTypes.STRING,
      newValue: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "IssueHistory",
    }
  )
  return IssueHistory
}
