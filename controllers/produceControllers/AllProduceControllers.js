const potato = require("../../model/produce/potatoModel")
const berry = require("../../model/produce/berryModel")
const rice = require("../../model/produce/riceModel")
const tomato = require("../../model/produce/tomatoModel")
const lemon = require("../../model/produce/lemonModel")
const nuts = require("../../model/produce/nutModel")
const onion = require("../../model/produce/onionModel")
const carrot = require("../../model/produce/carrotModel")
const catchAsync = require("../../utils/catchAsync.js")

let func

const pre = async (req, res) => {
  let name = await req.params.name
  console.log(`${name} is running....`)
  func = 
  name === "potato" ? potato :
  name === "berry" ? berry :
  name === "rice" ? rice :
  name === "tomato" ? tomato : 
  name === "lemon" ? lemon :
  name === "nuts" ? nuts :
  name === "onion" ? onion :
  name === "carrot" ? carrot : undefined
}

exports.createProduce = catchAsync(async (req, res, next) => {
  await pre(req, res)
  const newProduce = new func({ farm_Id: req.params.farmId , ...req.body })
  newProduce.save()
  res.status(201).json({
    status: "Success",
    data: {
      newProduce
    }
  })
})

exports.getProduceById = catchAsync(async (req, res, next) => {
  await pre(req, res)
  const produce = await func.findById(req.params.id)
  if(!produce) {
    return next(new AppError("No produce is found with that Id", 404))
  }
  res.status(200).json({
    status: "Success",
    data: {
      produce
    }
  })
})

exports.updateProduceByItsId = catchAsync(async (req, res, next) => {
  await pre(req, res)
  const produce = await func.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })
  if(!produce) {
    return next(new AppError("No produce is found with that Id", 404))
  }
  res.status(200).json({
    status: "Success",
    data: {
      produce
    }
  })
})

exports.deleteProduceByItsId = catchAsync(async (req, res, next) => {
  await pre(req, res)
  const produce = await func.findByIdAndDelete(req.params.id)
  if(!produce) {
    return next(new AppError("No produce is found with that Id", 404))
  }
  res.status(204).json({
    status: "Success",
    data: null
  })
})

