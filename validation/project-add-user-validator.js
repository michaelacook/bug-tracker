const { body } = require("express-validator")

module.exports = [
  body("userId")
    .exists()
    .withMessage("Please supply a userId.")
    .isInt()
    .withMessage("User id must be an integer."),
]
