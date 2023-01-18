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

const berrySchema = new mongoose.Schema({
  farm_Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farm'
  },
  blueBerry: {
    type: Boolean
  },
  blueBerryDetails: {
    type: detailsSchema,
    validate: function() {
      return this.blueBerry
    }
  },
  strawBerry: {
    type: Boolean
  },
  strawBerryDetails: {
    type: detailsSchema,
    validate: function() {
      return this.strawBerry
    }
  },
  cranBerry: {
    type: Boolean
  },
  cranBerryDetails: {
    type: detailsSchema,
    validate: function() {
      return this.cranBerry
    }
  },
  blackBerry: {
    type: Boolean
  },
  blackBerryDetails: {
    type: detailsSchema,
    validate: function() {
      return this.blackBerry
    }
  },
  blackCurrant: {
    type: Boolean
  },
  blackCurrantDetails: {
    type: detailsSchema,
    validate: function() {
      return this.blackCurrant
    }
  },
  salmonBerry: {
    type: Boolean
  },
  salmonBerryDetails: {
    type: detailsSchema,
    validate: function() {
      return this.salmonBerry
    }
  },
  gooseBerry: {
    type: Boolean
  },
  gooseBerryDetails: {
    type: detailsSchema,
    validate: function() {
      return this.gooseBerry
    }
  },
  mulBerry: {
    type: Boolean
  },
  mulBerryDetails: {
    type: detailsSchema,
    validate: function() {
      return this.mulBerry
    }
  },
  lingonBerry: {
    type: Boolean
  },
  lingonBerryDetails: {
    type: detailsSchema,
    validate: function() {
      return this.lingonBerry
    }
  }
})

const Berry = mongoose.model("Berry", berrySchema)

module.exports = Berry
