"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({ User, Issue }) {
      Comment.belongsTo(User, {
        foreignKey: "userId"
      })
      Comment.belongsTo(Issue, {
        foreignKey: "issueId"
      })
    }
  }
  Comment.init(
    {
      userId: DataTypes.NUMBER,
      targetUserId: DataTypes.NUMBER,
      issueId: DataTypes.NUMBER,
      body: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Comment",
    }
  )
  return Comment
}
