"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    static associate({ User }) {
      Notification.belongsTo(User, {
        foreignKey: "targetUserId",
      })
      Notification.belongsTo(User, {
        foreignKey: "sourceUserId",
      })
    }
  }
  Notification.init(
    {
      targetUserId: DataTypes.NUMBER, // FK
      sourceUserId: DataTypes.NUMBER,
      referenceItemId: DataTypes.NUMBER,
      body: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Notification",
    }
  )
  return Notification
}
