// https://medium.com/free-code-camp/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0

const express = require("express")
const cors = require("cors")
const path = require("path")

// in production serve create-react-app index.html
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")))
  app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"))
  })
}

const app = express()

module.exports = app
