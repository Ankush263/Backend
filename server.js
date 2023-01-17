const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = require("./app")

dotenv.config({ path: "./.env" })
const DB = process.env.DATABASE

mongoose.connect(DB, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true
}).then((con) => {
  console.log("DB connected successfully")
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`You are listening to the port ${port}`)
})