// const Meat = require("../model/meatModel.js")
// const APIFeatures = require("../utils/apiFeatures.js")

// exports.getSingleMeat = async (req, res) => {
//   try {
//     const allMeats = await Meat.findById(req.params.id)
//     res.status(200).json({
//       status: "Success",
//       data: {
//         meats: allMeats
//       }
//     })
//   } catch (error) {
//     res.status(404).json({
//       status: "fail",
//       message: error
//     })
//   }
// }

// exports.getMeatByFarmId = async (req, res) => {
//   try {
//     const features = new APIFeatures(Meat.find(), req.query)
//     .filter()

//    const meat = await features.query
//     res.status(200).json({
//       status: "Success",
//       data: {
//         meats: meat
//       }
//     })
//   } catch (error) {
//     res.status(404).json({
//       status: "fail",
//       message: error
//     })
//   }
// }

// exports.createMeat = async (req, res) => {
//   try {
//     const newMeat = await Meat.create(req.body)
//     res.status(200).json({
//       status: "Success",
//       data: {
//         newMeat
//       }
//     })
//   } catch (error) {
//     res.status(404).json({
//       status: "fail",
//       message: error
//     })
//   }
// }

// exports.updateMeat = async (req, res) => {
//   try {
//     const meat = await Meat.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true
//     })
//     res.status(200).json({
//       status: "Success",
//       data: {
//         meats: meat
//       }
//     })
//   } catch (error) {
//     res.status(404).json({
//       status: "fail",
//       message: error
//     })
//   }
// }

// exports.deleteMeat = async (req, res) => {
//   try {
//     await Meat.findByIdAndDelete(req.params.id)
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
