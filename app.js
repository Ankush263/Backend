const express = require("express")
const app = express()

const farmRouter = require("./routes/farmRoutes.js")
const meatRouter = require("./routes/meatRouter.js")
const produceRouter = require("./routes/produceRouter.js")

app.use(express.json())

app.use((req, res, next) => {
  console.log("This is from middleware")
  next()
})

app.use("/api/v1/farm", farmRouter)

app.use("/api/v1/meat", meatRouter)
app.use("/api/v1/produce", produceRouter)

module.exports = app
