// routes for endpoints beginning with /projects

const express = require("express")
const router = express.Router()
const ProjectController = require("../controllers/ProjectController")

router.get("/all", (req, res, next) =>
  ProjectController.allProjectsGET(req, res, next)
)

module.exports = router
