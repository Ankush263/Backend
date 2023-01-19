const express = require("express")

const {
  createProduce,
  getProduceById,
  updateProduceByItsId,
  deleteProduceByItsId,
} = require("../controllers/produceControllers/AllProduceControllers.js")

const router = express.Router()

router
  .route("/:farmId/:name")
    .post(createProduce)

router
  .route("/:farmId/:name/:id")
    .get(getProduceById)
    .patch(updateProduceByItsId)
    .delete(deleteProduceByItsId)

module.exports = router
