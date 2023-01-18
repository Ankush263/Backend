const mongoose = require("mongoose")
const Farm = require("../farmModel.js")

const detailsSchema = new mongoose.Schema({
  details: [
    {
      packsWeight: String,
      price: Number,
      img: String
    }
  ]
})

const riceSchema = new mongoose.Schema({
  farm_Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farm'
  },
  arborioRice: {
    type: Boolean
  },
  arborioRiceDetails: {
    type: detailsSchema,
    validate: function() {
      return this.arborioRice
    }
  },
  basmatiRice: {
    type: Boolean
  },
  basmatiRiceDetails: {
    type: detailsSchema,
    validate: function() {
      return this.basmatiRice
    }
  },
  blackRice: {
    type: Boolean
  },
  blackRiceDetails: {
    type: detailsSchema,
    validate: function() {
      return this.blackRice
    }
  },
  bomaRice: {
    type: Boolean
  },
  bomaRiceDetails: {
    type: detailsSchema,
    validate: function() {
      return this.bomaRice
    }
  },
  brownRice: {
    type: Boolean
  },
  brownRiceDetails: {
    type: detailsSchema,
    validate: function() {
      return this.brownRice
    }
  },
  jasmineRice: {
    type: Boolean
  },
  jasmineRiceDetails: {
    type: detailsSchema,
    validate: function() {
      return this.jasmineRice
    }
  },
  longGrainWhiteRice: {
    type: Boolean
  },
  longGrainWhiteRiceDetails: {
    type: detailsSchema,
    validate: function() {
      return this.longGrainWhiteRice
    }
  },
  parboiledRice: {
    type: Boolean
  },
  parboiledRiceDetails: {
    type: detailsSchema,
    validate: function() {
      return this.parboiledRice
    }
  },
  stickyRice: {
    type: Boolean
  },
  stickyRiceDetails: {
    type: detailsSchema,
    validate: function() {
      return this.stickyRice
    }
  },
  sushiRice: {
    type: Boolean
  },
  sushiRiceDetails: {
    type: detailsSchema,
    validate: function() {
      return this.sushiRice
    }
  }
})

const Rice = mongoose.model("Rice", riceSchema)

module.exports = Rice
