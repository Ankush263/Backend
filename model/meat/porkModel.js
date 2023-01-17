const mongoose = require("mongoose")
const Farm = require("../farmModel.js")

const porkSchema = new mongoose.Schema({
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
    jowl: {
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
    hock: {
      available: Boolean,
      details: [
        {
          packsWeight: String,
          price: Number,
          img: String
        }
      ]
    },
    armSholder: {
      available: Boolean,
      details: [
        {
          packsWeight: String,
          price: Number,
          img: String
        }
      ]
    },
    bladeSholder: {
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
    spareRibs: {
      available: Boolean,
      details: [
        {
          packsWeight: String,
          price: Number,
          img: String
        }
      ]
    },
    belly: {
      available: Boolean,
      details: [
        {
          packsWeight: String,
          price: Number,
          img: String
        }
      ]
    },
    ham: {
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
    }
  }
})

const Pork = mongoose.model("Pork", porkSchema)

module.exports = Pork
