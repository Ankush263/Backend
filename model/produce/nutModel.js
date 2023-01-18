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

const nutSchema = new mongoose.Schema({
  farm_Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farm'
  },
  almonds: {
    type: Boolean
  },
  almondsDetails: {
    type: detailsSchema,
    validate: function() {
      return this.almonds
    }
  },
  hazelNut: {
    type: Boolean
  },
  hazelNutDetails: {
    type: detailsSchema,
    validate: function() {
      return this.hazelNut
    }
  },
  cashewNut: {
    type: Boolean
  },
  cashewNutDetails: {
    type: detailsSchema,
    validate: function() {
      return this.cashewNut
    }
  },
  peanut: {
    type: Boolean
  },
  peanutDetails: {
    type: detailsSchema,
    validate: function() {
      return this.peanut
    }
  },
  pistachio: {
    type: Boolean
  },
  pistachioDetails: {
    type: detailsSchema,
    validate: function() {
      return this.pistachio
    }
  },
  brazilNut: {
    type: Boolean
  },
  brazilNutDetails: {
    type: detailsSchema,
    validate: function() {
      return this.brazilNut
    }
  },
  walnut: {
    type: Boolean
  },
  walnutDetails: {
    type: detailsSchema,
    validate: function() {
      return this.walnut
    }
  },
  chestnut: {
    type: Boolean
  },
  chestnutDetails: {
    type: detailsSchema,
    validate: function() {
      return this.chestnut
    }
  },
})

const Nut = mongoose.model("Nut", nutSchema)

module.exports = Nut
