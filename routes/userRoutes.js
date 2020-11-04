// routes for paths starting with /users

const express = require("express")
const router = express.Router()
const UserController = require("../controllers/UserController")

router.get("/all", (req, res, next) =>
  UserController.allUsersGET(req, res, next)
)

module.exports = router