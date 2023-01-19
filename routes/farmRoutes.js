const express = require("express")

const {
  getAllFarms,
  createFarm,
  getSingleFarm,
  updateFarm,
  deleteFarm,
  getFarmStats,
} = require("../controllers/FarmControllers.js")

const router = express.Router()

router.route("/farm-stats").get(getFarmStats)

router
  .route("/")
    .get(getAllFarms)
    .post(createFarm)


router
  .route("/:id")
    .get(getSingleFarm)
    .patch(updateFarm)
    .delete(deleteFarm)

module.exports = router
