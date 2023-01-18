const mongoose = require("mongoose")
const Farm = require("../farmModel")

const detailsSchema = new mongoose.Schema({
  details: [
    {
      packsWeight: String,
      price: Number,
      img: String
    }
  ]
})

const carrotSchema = new mongoose.Schema({
  farm_Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farm'
  },
  parisMarket: {
    type: Boolean
  },
  parisMarketDetails: {
    type: detailsSchema,
    validate: function() {
      return this.parisMarket
    }
  },
  nantes: {
    type: Boolean
  },
  nantesDetails: {
    type: detailsSchema,
    validate: function() {
      return this.nantes
    }
  },
  chantenay: {
    type: Boolean
  },
  chantenayDetails: {
    type: detailsSchema,
    validate: function() {
      return this.chantenay
    }
  },
  danvers: {
    type: Boolean
  },
  danversDetails: {
    type: detailsSchema,
    validate: function() {
      return this.danvers
    }
  },
  imperator: {
    type: Boolean
  },
  imperatorDetails: {
    type: detailsSchema,
    validate: function() {
      return this.imperator
    }
  },
})

const Carrot = mongoose.model("Carrot", carrotSchema)

module.exports = Carrot
