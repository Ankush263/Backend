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

const onionSchema = new mongoose.Schema({
  farm_Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farm'
  },
  leeks: {
    type: Boolean
  },
  leeksDetails: {
    type: detailsSchema,
    validate: function() {
      return this.leeks
    }
  },
  sweetOnion: {
    type: Boolean
  },
  sweetOnionDetails: {
    type: detailsSchema,
    validate: function() {
      return this.sweetOnion
    }
  },
  yellowOnion: {
    type: Boolean
  },
  yellowOnionDetails: {
    type: detailsSchema,
    validate: function() {
      return this.yellowOnion
    }
  },
  greenOnion: {
    type: Boolean
  },
  greenOnionDetails: {
    type: detailsSchema,
    validate: function() {
      return this.greenOnion
    }
  },
  whiteOnion: {
    type: Boolean
  },
  whiteOnionDetails: {
    type: detailsSchema,
    validate: function() {
      return this.whiteOnion
    }
  },
  shallot: {
    type: Boolean
  },
  shallotDetails: {
    type: detailsSchema,
    validate: function() {
      return this.shallot
    }
  },
  redOnion: {
    type: Boolean
  },
  redOnionDetails: {
    type: detailsSchema,
    validate: function() {
      return this.redOnion
    }
  },
})

const Onion = mongoose.model("Onion", onionSchema)

module.exports = Onion
