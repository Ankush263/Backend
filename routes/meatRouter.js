const express = require("express")

const {
  createMeat,
  getMeatById,
  updateMeatByItsId,
  deleteMeatByItsId
} = require("../controllers/meatControllers/AllMeatControllers.js")

const router = express.Router()

router
  .route("/:farmId/:name")
    .post(createMeat)

router
  .route("/:farmId/:name/:id")
    .get(getMeatById)
    .patch(updateMeatByItsId)
    .delete(deleteMeatByItsId)

module.exports = router
