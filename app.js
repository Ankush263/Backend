const express = require("express")
const app = express()

const farmRouter = require("./routes/farmRoutes.js")
const AllMeatRoutes = require("./routes/meatRoutes/AllMeatRoutes.js")

app.use(express.json())

app.use((req, res, next) => {
  console.log("This is from middleware")
  next()
})

app.use("/api/v1/farm", farmRouter)
app.use("/api/v1/farm/meat/allmeat", AllMeatRoutes)

module.exports = app
