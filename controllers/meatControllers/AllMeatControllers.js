const chicken = require("../../model/meat/chickenModel.js")
const pork = require("../../model/meat/porkModel.js")
const beef = require("../../model/meat/beefModel.js")
const goat = require("../../model/meat/goatModel.js")
const lamb = require("../../model/meat/lambModel.js")
const turkey = require("../../model/meat/turkeyModel.js")
const duck = require("../../model/meat/duckModel.js")
const APIFeatures = require("../../utils/apiFeatures.js")

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

exports.createMeat = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error
    })
  }
}

exports.getMeatById = async (req, res) => {
  try {
    await pre(req, res)
    const meat = await func.findById(req.params.id)
    console.log(req.params)
    res.status(200).json({
      status: "Success",
      data: {
        meat
      }
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error
    })
  }
}

exports.updateMeatByItsId = async (req, res) => {
  try {
    await pre(req, res)
    const meat = await func.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    res.status(200).json({
      status: "Success",
      data: {
        meat
      }
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error
    })
  }
}

exports.deleteMeatByItsId = async (req, res) => {
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

