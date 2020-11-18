// routes for endpoints beginning with /projects

const express = require("express")
const router = express.Router()
const ProjectController = require("../controllers/ProjectController")
const newProjectValidator = require("../validation/new-project-validator")
const updateProjectValidator = require("../validation/update-project-validator")
const addProjectUserValidator = require("../validation/project-add-user-validator")

router.get("/all", (req, res, next) =>
  ProjectController.allProjectsGET(req, res, next)
)

router.get("/:id", (req, res, next) =>
  ProjectController.oneProjectGET(req, res, next)
)

router.post("/new", newProjectValidator, (req, res, next) =>
  ProjectController.projectAddPOST(req, res, next)
)

router.post("/:id/users/add", addProjectUserValidator, (req, res, next) =>
  ProjectController.projectAddUserPOST(req, res, next)
)

router.put("/:id/update", updateProjectValidator, (req, res, next) =>
  ProjectController.projectUpdatePUT(req, res, next)
)

router.delete("/:projectId/users/:userId/remove", (req, res, next) =>
  ProjectController.projectRemoveUserDELETE(req, res, next)
)

router.delete("/:id/delete", (req, res, next) =>
  ProjectController.projectDeleteDELETE(req, res, next)
)

// should add routes for /project/:id/issues/all and /project/:id/issues/:issueId

module.exports = router
