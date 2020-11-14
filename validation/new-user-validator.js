const { body } = require("express-validator")
const { User } = require("../models/index")

module.exports = [
  body("firstName")
    .exists({
      checkNull: true,
      checkFalsy: true,
    })
    .withMessage("Please provide a value for first name.")
    .isAlpha(),
  body("lastName")
    .exists({
      checkNull: true,
      checkFalsy: true,
    })
    .withMessage("Please provide a value for last name.")
    .isAlpha(),
  body("email")
    .exists({
      checkNull: true,
      checkFalsy: true,
    })
    .isEmail()
    .withMessage("Please provide an email address.")
    .custom((value) => {
      return User.findOne({
        where: {
          email: value,
        },
      }).then((user) => {
        if (user) {
          return Promise.reject("Email already in use.")
        }
      })
    }),
  body("password")
    .exists({
      checkNull: true,
      checkFalsy: true,
    })
    .withMessage("Please provide a password.")
    .isAlphanumeric()
    .withMessage("Password should contain only numbers and letters.")
    .isLength({
      min: 6,
      max: undefined,
    })
    .withMessage("Please provide a password at least six characters long."),
]
