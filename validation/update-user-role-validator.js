const { body } = require("express-validator")

module.exports = [
  body("roleId")
    .exists()
    .isNumeric()
    .withMessage("Role id must be an integer between 1 and 3.")
    .isLength({
      min: 1,
      max: 1,
    })
    .withMessage("Role id must be a single digit."),
]
