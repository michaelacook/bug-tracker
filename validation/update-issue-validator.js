const { body } = require("express-validator")

module.exports = [
  body("priorityId")
    .optional()
    .isInt()
    .withMessage("Priority id must be an interger."),
  body("projectId").optional().isInt(),
  body("title").optional(),
  body("description").optional(),
]
