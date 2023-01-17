const mongoose = require("mongoose")
const Farm = require("../farmModel")

const carrotSchema = new mongoose.Schema({
  subDoc: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farm'
  },
  parisMarket: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ]
  },
  nantes: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ]
  },
  chantenay: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ]
  },
  danvers: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ]
  },
  imperator: {
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

const Carrot = mongoose.model("Carrot", carrotSchema)

module.exports = Carrot
