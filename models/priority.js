"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Priority extends Model {
    static associate({ Issue }) {}
  }
  Priority.init(
    {
      level: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Priority",
    }
  )
  return Priority
}
