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

const potatoSchema = new mongoose.Schema({
  farm_Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farm'
  },
  russet: {
    type: Boolean
  },
  russetDetails: {
    type: detailsSchema,
    validate: function() {
      return this.russet
    }
  },
  jewelYam: {
    type: Boolean
  },
  jewelYamDetails: {
    type: detailsSchema,
    validate: function() {
      return this.jewelYam
    }
  },
  japaneseSweet: {
    type: Boolean
  },
  japaneseSweetDetails: {
    type: detailsSchema,
    validate: function() {
      return this.japaneseSweet
    }
  },
  hannahSweet: {
    type: Boolean
  },
  hannahSweetDetails: {
    type: detailsSchema,
    validate: function() {
      return this.hannahSweet
    }
  },
  redBliss: {
    type: Boolean
  },
  redBlissDetails: {
    type: detailsSchema,
    validate: function() {
      return this.redBliss
    }
  },
  frenchFingerling: {
    type: Boolean
  },
  frenchFingerlingDetails: {
    type: detailsSchema,
    validate: function() {
      return this.frenchFingerling
    }
  },
  russianBanana: {
    type: Boolean
  },
  russianBananaDetails: {
    type: detailsSchema,
    validate: function() {
      return this.russianBanana
    }
  },
  redThumb: {
    type: Boolean
  },
  redThumbDetails: {
    type: detailsSchema,
    validate: function() {
      return this.redThumb
    }
  },
  laRatte: {
    type: Boolean
  },
  laRatteDetails: {
    type: detailsSchema,
    validate: function() {
      return this.laRatte
    }
  },
  austrianCrescent: {
    type: Boolean
  },
  austrianCrescentDetails: {
    type: detailsSchema,
    validate: function() {
      return this.austrianCrescent
    }
  },
  yukonGold: {
    type: Boolean
  },
  yukonGoldDetails: {
    type: detailsSchema,
    validate: function() {
      return this.yukonGold
    }
  },
  redGold: {
    type: Boolean
  },
  redGoldDetails: {
    type: detailsSchema,
    validate: function() {
      return this.redGold
    }
  },
  purpleMajesty: {
    type: Boolean
  },
  purpleMajestyDetails: {
    type: detailsSchema,
    validate: function() {
      return this.purpleMajesty
    }
  },
  redNorland: {
    type: Boolean
  },
  redNorlandDetails: {
    type: detailsSchema,
    validate: function() {
      return this.redNorland
    }
  },
  allBlue: {
    type: Boolean
  },
  allBlueDetails: {
    type: detailsSchema,
    validate: function() {
      return this.allBlue
    }
  },
})

const Potato = mongoose.model("Potato", potatoSchema)

module.exports = Potato
