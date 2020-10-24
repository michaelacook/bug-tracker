"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({ User }) {}
  }
  Comment.init(
    {
      userId: DataTypes.NUMBER,
      targetUserId: DataTypes.NUMBER,
      body: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Comment",
    }
  )
  return Comment
}
