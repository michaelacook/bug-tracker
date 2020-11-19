const { body } = require("express-validator")

module.exports = [
  body("newPriorityId")
    .exists()
    .withMessage("New priority id required.")
    .isInt()
    .withMessage("New priority id must be an integer."),
]
