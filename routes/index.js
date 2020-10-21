const express = require("express")
const app = require("../app")
const router = express.Router()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

module.exports = router
