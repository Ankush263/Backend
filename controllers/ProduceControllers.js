// const Produce = require("../model/produceModel.js")
// const APIFeatures = require("../utils/apiFeatures.js")

// exports.getSingleProduce = async (req, res) => {
//   try {
//     const allProduce = await Produce.findById(req.params.id)
//     res.status(200).json({
//       status: "Success",
//       data: {
//         produce: allProduce
//       }
//     })
//   } catch (error) {
//     res.status(404).json({
//       status: "fail",
//       message: error
//     })
//   }
// }

// exports.getProduceByFarmId = async (req, res) => {
//   try {
//     const features = new APIFeatures(Produce.find(), req.query)
//     .filter()

//    const produce = await features.query
//     res.status(200).json({
//       status: "Success",
//       data: {
//         produce
//       }
//     })
//   } catch (error) {
//     res.status(404).json({
//       status: "fail",
//       message: error
//     })
//   }
// }

// exports.createProduce = async (req, res) => {
//   try {
//     const newProduce = await Produce.create(req.body)
//     res.status(200).json({
//       status: "Success",
//       data: {
//         newProduce
//       }
//     })
//   } catch (error) {
//     res.status(404).json({
//       status: "fail",
//       message: error
//     })
//   }
// }

// exports.updateProduce = async (req, res) => {
//   try {
//     const produce = await Produce.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true
//     })
//     res.status(200).json({
//       status: "Success",
//       data: {
//         produce
//       }
//     })
//   } catch (error) {
//     res.status(404).json({
//       status: "fail",
//       message: error
//     })
//   }
// }

// exports.deleteProduce = async (req, res) => {
//   try {
//     await Produce.findByIdAndDelete(req.params.id)
//     res.status(200).json({
//       status: "Success",
//       data: null
//     })
//   } catch (error) {
//     res.status(404).json({
//       status: "fail",
//       message: error
//     })
//   }
// }
