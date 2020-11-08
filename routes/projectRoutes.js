// routes for endpoints beginning with /projects

const express = require("express")
const router = express.Router()
const ProjectController = require("../controllers/ProjectController")

router.get("/all", (req, res, next) =>
  ProjectController.allProjectsGET(req, res, next)
)

router.get("/:id", (req, res, next) =>
  ProjectController.oneProjectGET(req, res, next)
)

router.post("/new", (req, res, next) =>
  ProjectController.projectAddPOST(req, res, next)
)

router.put("/:id/update", (req, res, next) =>
  ProjectController.projectUpdatePUT(req, res, next)
)

module.exports = router