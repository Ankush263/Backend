const mongoose = require("mongoose")
const Farm = require("../farmModel.js")

const tomatoSchema = new mongoose.Schema({
  subDoc: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farm'
  },
  cherryTomato: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ],
  },
  plumTomato: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ],
  },
  globeTomato: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ],
  },
  beefSteak: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ],
  },
  oxheartTomato: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ],
  },
  yellowTomato: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ],
  }
})

const Tomato = mongoose.model("Tomato", tomatoSchema)

module.exports = Tomato
