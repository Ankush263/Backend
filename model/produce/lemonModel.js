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

const lemonSchema = new mongoose.Schema({
  farm_Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farm'
  },
  avalonLemon: {
    type: Boolean
  },
  avalonLemonDetails: {
    type: detailsSchema,
    validate: function() {
      return this.avalonLemon
    }
  },
  bearssLemon: {
    type: Boolean
  },
  bearssLemonDetails: {
    type: detailsSchema,
    validate: function() {
      return this.bearssLemon
    }
  },
  bushLemon: {
    type: Boolean
  },
  bushLemonDetails: {
    type: detailsSchema,
    validate: function() {
      return this.bushLemon
    }
  },
  baboonLemon: {
    type: Boolean
  },
  baboonLemonDetails: {
    type: detailsSchema,
    validate: function() {
      return this.baboonLemon
    }
  },
  dorshapoLemon: {
    type: Boolean
  },
  dorshapoLemonDetails: {
    type: detailsSchema,
    validate: function() {
      return this.dorshapoLemon
    }
  },
  eurekaLemon: {
    type: Boolean
  },
  eurekaLemonDetails: {
    type: detailsSchema,
    validate: function() {
      return this.eurekaLemon
    }
  },
  meyerLemon: {
    type: Boolean
  },
  meyerLemonDetails: {
    type: detailsSchema,
    validate: function() {
      return this.meyerLemon
    }
  },
  lisbonLemon: {
    type: Boolean
  },
  lisbonLemonDetails: {
    type: detailsSchema,
    validate: function() {
      return this.lisbonLemon
    }
  },
})

const Lemon = mongoose.model("Lemon", lemonSchema)

module.exports = Lemon
