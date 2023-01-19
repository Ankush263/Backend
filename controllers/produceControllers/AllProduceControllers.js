const potato = require("../../model/produce/potatoModel")
const berry = require("../../model/produce/berryModel")
const rice = require("../../model/produce/riceModel")
const tomato = require("../../model/produce/tomatoModel")
const lemon = require("../../model/produce/lemonModel")
const nuts = require("../../model/produce/nutModel")
const onion = require("../../model/produce/onionModel")
const carrot = require("../../model/produce/carrotModel")

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

exports.createProduce = async (req, res) => {
  try {
    await pre(req, res)
    console.log(req.params)
    console.log("produce create called...")
    const newProduce = new func({ farm_Id: req.params.farmId , ...req.body })
    newProduce.save()
    res.status(201).json({
      status: "Success",
      data: {
        newProduce
      }
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error
    })
  }
}

exports.getProduceById = async (req, res) => {
  try {
    await pre(req, res)
    const produce = await func.findById(req.params.id)
    console.log(req.params)
    res.status(200).json({
      status: "Success",
      data: {
        produce
      }
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error
    })
  }
}

exports.updateProduceByItsId = async (req, res) => {
  try {
    await pre(req, res)
    const produce = await func.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    res.status(200).json({
      status: "Success",
      data: {
        produce
      }
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error
    })
  }
}

exports.deleteProduceByItsId = async (req, res) => {
  try {
    await pre(req, res)
    await func.findByIdAndDelete(req.params.id)
    res.status(204).json({
      status: "Success",
      data: null
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error
    })
  }
}

