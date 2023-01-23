const Farm = require("../model/farmModel.js")
const APIFeatures = require("../utils/apiFeatures.js")
const AppError = require("../utils/appError.js")
const catchAsync = require("../utils/catchAsync.js")

// ----------GET ALL LISTED FARM----------
exports.getAllFarms = catchAsync(async (req, res, next) => {
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
})

// ----------CREATE FARM----------
exports.createFarm = catchAsync(async (req, res, next) => {
  const newFarm = await Farm.create(req.body)

  res.status(201).json({
    status: "Success",
    data: {
      farm: newFarm
    }
  })
})

// ----------GET SINGLE FARM BY ID----------
exports.getSingleFarm = catchAsync(async (req, res, next) => {
  const farm = await Farm.findById(req.params.id)

  if(!farm) {
    return next(new AppError("No Farm is found with that ID", 404))
  }
  res.status(200).json({
    status: "Success",
    data: {
      farm
    }
  })
})

// ----------UPDATE A SINGLE FARM----------
exports.updateFarm = catchAsync(async (req, res, next) => {
  const farm = await Farm.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })
  if(!farm) {
    return next(new AppError("No Farm is found with that ID", 404))
  }
  res.status(200).json({
    status: "Success",
    data: {
      farm
    }
  })
})

// ----------DELETE FARM----------
exports.deleteFarm = catchAsync(async (req, res, next) => {
  const farm = await Farm.findByIdAndDelete(req.params.id)
  if(!farm) {
    return next(new AppError(`No Farm is found with that ID`, 404))
  }
  res.status(204).json({
    status: "Success",
    data: null
  })
})

// ----------AGGREGATE PIPELINE----------
exports.getFarmStats = catchAsync(async (req, res, next) => {
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
})
