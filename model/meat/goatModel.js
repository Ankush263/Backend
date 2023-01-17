const mongoose = require("mongoose")
const Farm = require("../farmModel.js")

const goatSchema = new mongoose.Schema({
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
    shoulder: {
      available: Boolean,
      details: [
        {
          packsWeight: String,
          price: Number,
          img: String
        }
      ]
    },
    rib: {
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
    shank: {
      available: Boolean,
      details: [
        {
          packsWeight: String,
          price: Number,
          img: String
        }
      ]
    },
    flank: {
      available: Boolean,
      details: [
        {
          packsWeight: String,
          price: Number,
          img: String
        }
      ]
    },
    loin: {
      available: Boolean,
      details: [
        {
          packsWeight: String,
          price: Number,
          img: String
        }
      ]
    },
    sirLoin: {
      available: Boolean,
      details: [
        {
          packsWeight: String,
          price: Number,
          img: String
        }
      ]
    },
    rump: {
      available: Boolean,
      details: [
        {
          packsWeight: String,
          price: Number,
          img: String
        }
      ]
    },
    leg: {
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

const Goat = mongoose.model("Goat", goatSchema)

module.exports = Goat
