const { body } = require("express-validator")

module.exports = [
  body("title").optional().isAlpha(),
  body("description").optional(),
  body("projectManager").isInt(),
]
