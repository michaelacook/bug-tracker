const { body } = require("express-validator")

module.exports = [
  body("title")
    .optional()
    .withMessage("Please supply a title for the project.")
    .isAlpha()
    .withMessage("Title must contain only letters"),
  body("description")
    .optional()
    .withMessage("Please supply a project description."),
  body("projectManager")
    .isInt()
    .withMessage("Project manager id must be an integer."),
]
