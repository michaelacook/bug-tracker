const { body } = require("express-validator")

module.exports = [
  body("roleId")
    .exists()
    .isNumeric()
    .withMessage("Role id must be an integer between 1 and 5.")
    .isInt({
      min: 1,
      max: 5,
    })
    .withMessage("role id must fall between 1 and 5.")
    .isLength({
      min: 1,
      max: 1,
    })
    .withMessage("Role id must be a single digit."),
]
