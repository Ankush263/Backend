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

const chickenSchema = new mongoose.Schema({
  farm_Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farm'
  },
  cuts: {
    wholeChicken: {
      type: Boolean,
    },
    wholeChickenDetails: {
      type: detailsSchema,
      validate: function() {
        return this.wholeChicken
      }
    },
    chickenLeg: {
      type: Boolean,
    },
    chickenLegDetails: {
      type: detailsSchema,
      validate: function() {
        return this.chickenLeg
      }
    },
    breast: {
      type: Boolean,
    },
    breastDetails: {
      type: detailsSchema,
      validate: function() {
        return this.breast
      }
    },
    wings: {
      type: Boolean,
    },
    wingsDetails: {
      type: detailsSchema,
      validate: function() {
        return this.wings
      }
    },
    dramstick: {
      type: Boolean,
    },
    dramstickDetails: {
      type: detailsSchema,
      validate: function() {
        return this.dramstick
      }
    },
    thigh: {
      type: Boolean,
    },
    thighDetails: {
      type: detailsSchema,
      validate: function() {
        return this.thigh
      }
    }
  }
})

const Chicken = mongoose.model("Chicken", chickenSchema)

module.exports = Chicken