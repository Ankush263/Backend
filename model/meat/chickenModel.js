const mongoose = require("mongoose")
const Farm = require("../farmModel.js")

const chickenSchema = new mongoose.Schema({
  subDoc: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farm'
  },
  cuts: {
    wholeChicken: {
      available: Boolean,
      details: [
        {
          packsWeight: String,
          price: Number,
          img: String
        }
      ]
    },
    chickenLeg: {
      available: Boolean,
      details: [
        {
          packsWeight: String,
          price: Number,
          img: String
        }
      ]
    },
    breast: {
      available: Boolean,
      details: [
        {
          packsWeight: String,
          price: Number,
          img: String
        }
      ]
    },
    wings: {
      available: Boolean,
      details: [
        {
          packsWeight: String,
          price: Number,
          img: String
        }
      ]
    },
    dramstick: {
      available: Boolean,
      details: [
        {
          packsWeight: String,
          price: Number,
          img: String
        }
      ]
    },
    thigh: {
      available: Boolean,
      details: [
        {
          packsWeight: String,
          price: Number,
          img: String
        }
      ]
    }
  }
})

const Chicken = mongoose.model("Chicken", chickenSchema)

module.exports = Chicken