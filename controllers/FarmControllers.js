const Farm = require("../model/farmModel.js")
const APIFeatures = require("../utils/apiFeatures.js")
const chicken = require("./../model/meat/chickenModel.js")

// ----------GET ALL LISTED FARM----------
exports.getAllFarms = async (req, res) => {
  try {
    const features = new APIFeatures(Farm.find(), req.query)
      .filter()
      .sort()
      .pagination()

    const farm = await features.query
    res.status(200).json({
      status: "Success",
      result: farm.length,
      data: {
        farm
      }
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error
    })
  }
}

// ----------CREATE FARM----------
exports.createFarm = async (req, res) => {
  try {
    const newFarm = await Farm.create(req.body)
    res.status(201).json({
      status: "Success",
      data: {
        farm: newFarm
      }
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error
    })
  }
}

// ----------GET SINGLE FARM BY ID----------
exports.getSingleFarm = async (req, res) => {
  try {
    const farm = await Farm.findById(req.params.id)
    console.log(req.params)
    console.log(req.query)
    res.status(200).json({
      status: "Success",
      data: {
        farm
      }
    })
  } catch (error) {
    res.status(404).json({
      status: "Success",
      message: error
    })
  }
}

// ----------UPDATE A SINGLE FARM----------
exports.updateFarm = async (req, res) => {
  try {
    const farm = await Farm.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    res.status(200).json({
      status: "Success",
      data: {
        farm
      }
    })
  } catch (error) {
    res.status(404).json({
      status: "Success",
      message: error
    })
  }
}

// ----------DELETE FARM----------
exports.deleteFarm = async (req, res) => {
  try {
    await Farm.findByIdAndDelete(req.params.id)
    res.status(204).json({
      status: "Success",
      data: null
    })
  } catch (error) {
    res.status(404).json({
      status: "Success",
      message: error
    })
  }
}

// ----------AGGREGATE PIPELINE----------
exports.getFarmStats = async (req, res) => {
  try {
    const stats = await Farm.aggregate([
      {
        $match: { rating: { $gte: 3.5 } },
      },
      {
        $group: {
          _id: null,
          avgRating: { $avg: "$rating" },
          num: { $sum: 1 }
        }
      }
    ])
    res.status(200).json({
      status: "Success",
      data: {
        stats
      }
    })
  } catch (error) {
    res.status(404).json({
      status: "Success",
      message: error
    })
  }
}
