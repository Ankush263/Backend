const mongoose = require("mongoose")
const Farm = require("../farmModel.js")

const riceSchema = new mongoose.Schema({
  subDoc: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farm'
  },
  arborioRice: {
    available: Boolean,
    length: "Medium grain",
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ],
  },
  basmatiRice: {
    available: Boolean,
    length: "Long grain",
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ],
  },
  blackRice: {
    available: Boolean,
    length: "short grain",
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ],
  },
  bomaRice: {
    available: Boolean,
    length: "short grain",
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ],
  },
  brownRice: {
    available: Boolean,
    length: "Long grain",
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ],
  },
  jasmineRice: {
    available: Boolean,
    length: "Long grain",
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ],
  },
  longGrainWhiteRice: {
    available: Boolean,
    length: "Long grain",
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ],
  },
  parboiledRice: {
    available: Boolean,
    length: "Long, Medium, Short grain",
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ],
  },
  stickyRice: {
    available: Boolean,
    length: "Long grain",
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ],
  },
  sushiRice: {
    available: Boolean,
    length: "Short grain",
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ],
  }
})

const Rice = mongoose.model("Rice", riceSchema)

module.exports = Rice
