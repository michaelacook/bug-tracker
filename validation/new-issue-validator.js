const { body } = require("express-validator")

module.exports = [
  body("priorityId")
    .exists()
    .withMessage("Priority id required.")
    .isInt()
    .withMessage("Priority id must be an interger."),
  body("projectId")
    .exists()
    .withMessage("Project id required.")
    .isInt()
    .withMessage("Project id must be an interger."),
  body("title").exists().withMessage("Issue title required."),
  body("description").exists().withMessage("Issue description required."),
]
