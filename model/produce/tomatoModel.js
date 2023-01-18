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

const tomatoSchema = new mongoose.Schema({
  farm_Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farm'
  },
  cherryTomato: {
    type: Boolean
  },
  cherryTomatoDetails: {
    type: detailsSchema,
    validate: function() {
      return this.cherryTomato
    }
  },
  plumTomato: {
    type: Boolean
  },
  plumTomatoDetails: {
    type: detailsSchema,
    validate: function() {
      return this.plumTomato
    }
  },
  globeTomato: {
    type: Boolean
  },
  globeTomatoDetails: {
    type: detailsSchema,
    validate: function() {
      return this.globeTomato
    }
  },
  beefSteak: {
    type: Boolean
  },
  beefSteakDetails: {
    type: detailsSchema,
    validate: function() {
      return this.beefSteak
    }
  },
  oxheartTomato: {
    type: Boolean
  },
  oxheartTomatoDetails: {
    type: detailsSchema,
    validate: function() {
      return this.oxheartTomato
    }
  },
  yellowTomato: {
    type: Boolean
  },
  yellowTomatoDetails: {
    type: detailsSchema,
    validate: function() {
      return this.yellowTomato
    }
  },
})

const Tomato = mongoose.model("Tomato", tomatoSchema)

module.exports = Tomato
