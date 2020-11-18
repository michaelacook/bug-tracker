const { body } = require("express-validator")

module.exports = [
  body("firstName")
    .optional()
    .isAlpha()
    .withMessage("First name should contain only alphabetical characters."),
  body("lastName")
    .optional()
    .isAlpha()
    .withMessage("Last name should contain only alphabetical characters."),
  body("email")
    .optional()
    .isEmail()
    .withMessage("Please provide an email address."),
  body("password")
    .optional()
    .isAlphanumeric()
    .withMessage("Password should contain only numbers and letters.")
    .isLength({
      min: 6,
      max: undefined,
    })
    .withMessage("Please provide a password at least six characters long."),
]
