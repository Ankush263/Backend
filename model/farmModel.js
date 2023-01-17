const mongoose = require("mongoose")

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
    required: true,
    details: {
      potato: Boolean,
      berry: Boolean,
      rice: Boolean,
      tomato: Boolean,
      lemon: Boolean,
      nuts: Boolean,
      onion: Boolean,
      carrot: Boolean
    }
  },
  meat: {
    type: Boolean,
    required: true,
    details: {
      chicken: Boolean,
      pork: Boolean,
      beef: Boolean,
      goat: Boolean,
      lamb: Boolean,
      turkey: Boolean,
      duck: Boolean
    }
  }
})

// ----------QUERY MIDDLEWARE----------
// farmSchema.pre("find", function(next) {

//   next()
// })

const Farm = mongoose.model("Farm", farmSchema)

module.exports = Farm
