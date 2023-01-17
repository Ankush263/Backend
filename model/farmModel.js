const mongoose = require("mongoose")

const meatDetailSchema = new mongoose.Schema({
  chicken: Boolean,
  pork: Boolean,
  beef: Boolean,
  goat: Boolean,
  lamb: Boolean,
  turkey: Boolean,
  duck: Boolean,
})

const produceDetailSchema = new mongoose.Schema({
  potato: Boolean,
  berry: Boolean,
  rice: Boolean,
  tomato: Boolean,
  lemon: Boolean,
  nuts: Boolean,
  onion: Boolean,
  carrot: Boolean,
})

const farmSchema = new mongoose.Schema({
  createAt: {
    type: Date,
    default: Date.now,
    required: true
  },
  farmName: {
    type: String,
    required: true,
    unique: true
  },
  farmImage: {
    type: [String],
    required: true
  },
  farmLocation: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    default: 0
  },
  produce: {
    type: Boolean,
    default: false
  },
  produceDetails: {
    type: produceDetailSchema,
    validate: function() {
      return this.produce
    }
  },
  meat: {
    type: Boolean,
    default: false
  },
  meatDetails: {
    type: meatDetailSchema,
    validate: function() {
      return this.meat
    }
  }
})

// ----------QUERY MIDDLEWARE----------
// farmSchema.pre("find", function(next) {

//   next()
// })

const Farm = mongoose.model("Farm", farmSchema)

module.exports = Farm
