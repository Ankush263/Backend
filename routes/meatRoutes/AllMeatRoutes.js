const express = require("express")

const {
  createMeat,
  getMeatByFarmId,
  updateMeatByItsId,
  deleteMeatByItsId,
  getMeatById
} = require("../../controllers/meatControllers/AllMeatControllers.js")

const router = express.Router()

router
  .route("/:name")
    .get(getMeatByFarmId)
    .post(createMeat)

router
  .route("/:name/:id")
    .patch(updateMeatByItsId)
    .delete(deleteMeatByItsId)
    .get(getMeatById)

module.exports = router
