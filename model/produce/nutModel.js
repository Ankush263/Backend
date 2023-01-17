const mongoose = require("mongoose")
const Farm = require("../farmModel.js")

const nutSchema = new mongoose.Schema({
  subDoc: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farm'
  },
  almonds: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ]
  },
  hazelNut: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ]
  },
  cashewNut: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ]
  },
  peanut: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ]
  },
  pistachio: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ]
  },
  brazilNut: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ]
  },
  walnut: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ]
  },
  chestnut: {
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

const Nut = mongoose.model("Nut", nutSchema)

module.exports = Nut
