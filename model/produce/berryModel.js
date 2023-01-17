const mongoose = require("mongoose")
const Farm = require("../farmModel.js")

const berrySchema = new mongoose.Schema({
  subDoc: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farm'
  },
  blueBerry: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ]
  },
  strawBerry: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ]
  },
  cranBerry: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ]
  },
  blackBerry: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ]
  },
  blackCurrant: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ]
  },
  salmonBerry: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ]
  },
  gooseBerry: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ]
  },
  mulBerry: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ]
  },
  lingonBerry: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ]
  }
})

const Berry = mongoose.model("Berry", berrySchema)

module.exports = Berry
