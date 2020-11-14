const { body } = require("express-validator")

module.exports = [
  body("firstName")
    .isAlpha()
    .withMessage("First name should contain only alphabetical characters."),
  body("lastName")
    .isAlpha()
    .withMessage("Last name should contain only alphabetical characters."),
  body("email").isEmail().withMessage("Please provide an email address."),
  body("password")
    .isAlphanumeric()
    .withMessage("Password should contain only numbers and letters.")
    .isLength({
      min: 6,
      max: undefined,
    })
    .withMessage("Please provide a password at least six characters long."),
]
