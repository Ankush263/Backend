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

const lambSchema = new mongoose.Schema({
  farm_Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farm'
  },
  cuts: {
    head: {
      type: Boolean
    },
    headDetails: {
      type: detailsSchema,
      validate: function() {
        return this.head
      }
    },
    neck: {
      type: Boolean
    },
    neckDetails: {
      type: detailsSchema,
      validate: function() {
        return this.neck
      }
    },
    shoulder: {
      type: Boolean
    },
    shoulderDetails: {
      type: detailsSchema,
      validate: function() {
        return this.shoulder
      }
    },
    rib: {
      type: Boolean
    },
    ribDetails: {
      type: detailsSchema,
      validate: function() {
        return this.rib
      }
    },
    breast: {
      type: Boolean
    },
    breastDetails: {
      type: detailsSchema,
      validate: function() {
        return this.breast
      }
    },
    shank: {
      type: Boolean
    },
    shankDetails: {
      type: detailsSchema,
      validate: function() {
        return this.shank
      }
    },
    flank: {
      type: Boolean
    },
    flankDetails: {
      type: detailsSchema,
      validate: function() {
        return this.flank
      }
    },
    loin: {
      type: Boolean
    },
    loinDetails: {
      type: detailsSchema,
      validate: function() {
        return this.loin
      }
    },
    chuck: {
      type: Boolean
    },
    chuckDetails: {
      type: detailsSchema,
      validate: function() {
        return this.chuck
      }
    },
    leg: {
      type: Boolean
    },
    legDetails: {
      type: detailsSchema,
      validate: function() {
        return this.leg
      }
    }
  }
})

const Lamb = mongoose.model("Lamb", lambSchema)

module.exports = Lamb
