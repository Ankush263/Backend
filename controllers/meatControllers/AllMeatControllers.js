const chicken = require("../../model/meat/chickenModel.js")
const pork = require("../../model/meat/porkModel.js")
const beef = require("../../model/meat/beefModel.js")
const goat = require("../../model/meat/goatModel.js")
const lamb = require("../../model/meat/lambModel.js")
const turkey = require("../../model/meat/turkeyModel.js")
const duck = require("../../model/meat/duckModel.js")
const catchAsync = require("../../utils/catchAsync.js")

let func

const pre = async (req, res) => {
  let name = await req.params.name
  console.log(`${name} is running....`)
  func = 
  name === "chicken" ? chicken :
  name === "pork" ? pork :
  name === "beef" ? beef :
  name === "duck" ? duck : 
  name === "goat" ? goat :
  name === "lamb" ? lamb :
  name === "turkey" ? turkey : undefined
}

// ----------CREATE MEAT BY FARM ID----------
exports.createMeat = catchAsync(async (req, res, next) => {
  await pre(req, res)
  console.log(req.params)
  const newMeat = new func({ farm_Id: req.params.farmId , ...req.body })
  newMeat.save()
  res.status(201).json({
    status: "Success",
    data: {
      newMeat
    }
  })
})

// ----------GET SINGLE MEAT BY IT's ID----------
exports.getMeatById = catchAsync(async (req, res, next) => {
  await pre(req, res)
  const meat = await func.findById(req.params.id)
  if(!meat) {
    return next(new AppError("No meat is found with that Id", 404))
  }
  res.status(200).json({
    status: "Success",
    data: {
      meat
    }
  })
})

// ----------UPDATE MEAT BY ID----------
exports.updateMeatByItsId = catchAsync(async (req, res, next) => {
  await pre(req, res)
  const meat = await func.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })
  if(!meat) {
    return next(new AppError("No meat is found with that Id", 404))
  }
  res.status(200).json({
    status: "Success",
    data: {
      meat
    }
  })
})

// ----------DELETE MEAT BY ID----------
exports.deleteMeatByItsId = catchAsync(async (req, res, next) => {
  await pre(req, res)
  const meat = await func.findByIdAndDelete(req.params.id)
  if(!meat) {
    return next(new AppError("No meat is found with that Id", 404))
  }
  res.status(204).json({
    status: "Success",
    data: null
  })
})

