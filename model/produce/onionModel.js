const mongoose = require("mongoose")
const Farm = require("../farmModel")

const onionSchema = new mongoose.Schema({
  subDoc: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farm'
  },
  leeks: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ]
  },
  sweetOnion: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ]
  },
  yellowOnion: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ]
  },
  greenOnion: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ]
  },
  whiteOnion: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ]
  },
  shallot: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ]
  },
  redOnion: {
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

const Onion = mongoose.model("Onion", onionSchema)

module.exports = Onion
