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

const beefSchema = new mongoose.Schema({
  farm_Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farm'
  },
  cuts: {
    neck: {
      type: Boolean
    },
    neckDetails: {
      type: detailsSchema,
      validate: function() {
        return this.neck
      }
    },
    brisket: {
      type: Boolean
    },
    brisketDetails: {
      type: detailsSchema,
      validate: function() {
        return this.brisket
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
    shank: {
      type: Boolean
    },
    shankDetails: {
      type: detailsSchema,
      validate: function() {
        return this.shank
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
    shortPlate: {
      type: Boolean
    },
    shortPlateDetails: {
      type: detailsSchema,
      validate: function() {
        return this.shortPlate
      }
    },
    shortLoin: {
      type: Boolean
    },
    shortLoinDetails: {
      type: detailsSchema,
      validate: function() {
        return this.shortLoin
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
    bottomSirloin: {
      type: Boolean
    },
    bottomSirloinDetails: {
      type: detailsSchema,
      validate: function() {
        return this.bottomSirloin
      }
    },
    topSirloin: {
      type: Boolean
    },
    topSirloinDetails: {
      type: detailsSchema,
      validate: function() {
        return this.topSirloin
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
    sirLoin: {
      type: Boolean
    },
    sirLoinDetails: {
      type: detailsSchema,
      validate: function() {
        return this.sirLoin
      }
    },
    rump: {
      type: Boolean
    },
    rumpDetails: {
      type: detailsSchema,
      validate: function() {
        return this.rump
      }
    },
    round: {
      type: Boolean
    },
    roundDetails: {
      type: detailsSchema,
      validate: function() {
        return this.round
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
    axTail: {
      type: Boolean
    },
    axTailDetails: {
      type: detailsSchema,
      validate: function() {
        return this.axTail
      }
    },
  }
})

const Beef = mongoose.model("Beef", beefSchema)

module.exports = Beef
