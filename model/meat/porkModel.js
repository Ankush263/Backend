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

const porkSchema = new mongoose.Schema({
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
    jowl: {
      type: Boolean
    },
    jowlDetails: {
      type: detailsSchema,
      validate: function() {
        return this.jowl
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
    hock: {
      type: Boolean
    },
    hockDetails: {
      type: detailsSchema,
      validate: function() {
        return this.hock
      }
    },
    armSholder: {
      type: Boolean
    },
    armSholderDetails: {
      type: detailsSchema,
      validate: function() {
        return this.armSholder
      }
    },
    bladeSholder: {
      type: Boolean
    },
    bladeSholderDetails: {
      type: detailsSchema,
      validate: function() {
        return this.bladeSholder
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
    spareRibs: {
      type: Boolean
    },
    spareRibsDetails: {
      type: detailsSchema,
      validate: function() {
        return this.spareRibs
      }
    },
    belly: {
      type: Boolean
    },
    bellyDetails: {
      type: detailsSchema,
      validate: function() {
        return this.belly
      }
    },
    ham: {
      type: Boolean
    },
    hamDetails: {
      type: detailsSchema,
      validate: function() {
        return this.ham
      }
    },
    sirLoin: {
      type: Boolean
    },
    sirLoinDetails: {
      type: detailsSchema,
      validate: function() {
        return this.sirLoin
      }
    }
  }
})

const Pork = mongoose.model("Pork", porkSchema)

module.exports = Pork
