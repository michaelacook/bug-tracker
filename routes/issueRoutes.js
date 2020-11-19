// routes for endpoints beginning with /issues

const express = require("express")
const router = express.Router()
const IssueController = require("../controllers/IssueController")
const newIssueValidator = require("../validation/new-issue-validator")
const updateIssueValidator = require("../validation/update-issue-validator")

router.get("/all", (req, res, next) =>
  IssueController.allIssuesGET(req, res, next)
)

router.get("/:id", (req, res, next) =>
  IssueController.oneIssueGET(req, res, next)
)

router.get("/project/:id", (req, res, next) =>
  IssueController.issueByProjectGET(req, res, next)
)

router.post("/new", newIssueValidator, (req, res, next) =>
  IssueController.issueAddPOST(req, res, next)
)

router.put("/:id/update", updateIssueValidator, (req, res, next) =>
  IssueController.issueUpdatePUT(req, res, next)
)

router.put("/:id/priority/update", (req, res, next) =>
  IssueController.issueUpdatePriorityPUT(req, res, next)
)

router.delete("/:id/delete", (req, res, next) =>
  IssueController.issueDeleteDELETE(req, res, next)
)

module.exports = router
