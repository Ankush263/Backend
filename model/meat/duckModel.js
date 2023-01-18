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

const duckSchema = new mongoose.Schema({
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
    breast: {
      type: Boolean
    },
    breastDetails: {
      type: detailsSchema,
      validate: function() {
        return this.breast
      }
    },
    drumstick: {
      type: Boolean
    },
    drumstickDetails: {
      type: detailsSchema,
      validate: function() {
        return this.drumstick
      }
    },
    thigh: {
      type: Boolean
    },
    thighDetails: {
      type: detailsSchema,
      validate: function() {
        return this.thigh
      }
    },
    tenderLoin: {
      type: Boolean
    },
    tenderLoinDetails: {
      type: detailsSchema,
      validate: function() {
        return this.tenderLoin
      }
    },
    back: {
      type: Boolean
    },
    backDetails: {
      type: detailsSchema,
      validate: function() {
        return this.back
      }
    },
    wing: {
      type: Boolean
    },
    wingDetails: {
      type: detailsSchema,
      validate: function() {
        return this.wing
      }
    },
    tip: {
      type: Boolean
    },
    tipDetails: {
      type: detailsSchema,
      validate: function() {
        return this.tip
      }
    },
    tail: {
      type: Boolean
    },
    tailDetails: {
      type: detailsSchema,
      validate: function() {
        return this.tail
      }
    }
  }
})

const Duck = mongoose.model("Duck", duckSchema)

module.exports = Duck
