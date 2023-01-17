const mongoose = require("mongoose")
const Farm = require("../farmModel.js")

const duckSchema = new mongoose.Schema({
  subDoc: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farm'
  },
  cuts: {
    head: {
      available: Boolean,
      details: [
        {
          packsWeight: String,
          price: Number,
          img: String
        }
      ]
    },
    neck: {
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
    drumstick: {
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
    },
    tenderLoin: {
      available: Boolean,
      details: [
        {
          packsWeight: String,
          price: Number,
          img: String
        }
      ]
    },
    back: {
      available: Boolean,
      details: [
        {
          packsWeight: String,
          price: Number,
          img: String
        }
      ]
    },
    wing: {
      available: Boolean,
      details: [
        {
          packsWeight: String,
          price: Number,
          img: String
        }
      ]
    },
    tip: {
      available: Boolean,
      details: [
        {
          packsWeight: String,
          price: Number,
          img: String
        }
      ]
    },
    tail: {
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

const Duck = mongoose.model("Duck", duckSchema)

module.exports = Duck
