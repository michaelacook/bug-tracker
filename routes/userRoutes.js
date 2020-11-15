// routes for paths starting with /users
const newUserValidator = require("../validation/new-user-validator")
const updateUserValidator = require("../validation/update-user-validator")
const updateUserRoleValidator = require("../validation/update-user-role-validator")

const express = require("express")
const router = express.Router()
const UserController = require("../controllers/UserController")

router.get("/all", (req, res, next) =>
  UserController.allUsersGET(req, res, next)
)

router.get("/:id", (req, res, next) =>
  UserController.oneUserGET(req, res, next)
)

router.post("/new", newUserValidator, (req, res, next) =>
  UserController.userAddPOST(req, res, next)
)

router.put("/:id/update", updateUserValidator, (req, res, next) =>
  UserController.userUpdatePUT(req, res, next)
)

router.put("/:id/role/update", updateUserRoleValidator, (req, res, next) =>
  UserController.userUpdateRolePUT(req, res, next)
)

router.delete("/:id/delete", (req, res, next) =>
  UserController.userDeleteDELETE(req, res, next)
)

module.exports = router
