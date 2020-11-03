// https://medium.com/free-code-camp/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0

const express = require("express")
const cors = require("cors")
const path = require("path")
const app = express()

const userRoutes = require("./routes/userRoutes")

// in production serve create-react-app index.html
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")))
  app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"))
  })
}

// routes
app.get("/", (req, res) =>
  res.json({ message: "Welcome to the Bug Tracker API" })
)
app.use("/users", userRoutes)

// error handler
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== "production") {
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    })
  } else {
    res.status(err.status || 500).json(err.message)
  }
})

module.exports = app
