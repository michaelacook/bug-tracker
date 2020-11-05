// routes for paths starting with /users

const express = require("express")
const router = express.Router()
const UserController = require("../controllers/UserController")

router.get("/all", (req, res, next) =>
  UserController.allUsersGET(req, res, next)
)

router.get("/:id", (req, res, next) =>
  UserController.oneUserGET(req, res, next)
)

router.post("/new", (req, res, next) =>
  UserController.userAddPOST(req, res, next)
)

router.put("/:id/update", (req, res, next) =>
  UserController.userUpdatePUT(req, res, next)
)

router.put("/:id/role/update", (req, res, next) =>
  UserController.userUpdateRolePUT(req, res, next)
)

router.delete("/:id/delete", (req, res, next) =>
  UserController.userDeleteDELETE(req, res, next)
)

module.exports = router
