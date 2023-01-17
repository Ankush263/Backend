const mongoose = require("mongoose")
const Farm = require("../farmModel.js")

const potatoSchema = new mongoose.Schema({
  subDoc: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farm'
  },
  russet: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ],
    description: {
      type: String,
      default: "Ideal for frying or baking"
    }
  },
  jewelYam: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ],
    description: {
      type: String,
      default: "Ideal for frying or baking"
    }
  },
  japaneseSweet: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ],
    description: {
      type: String,
      default: "Ideal for frying or baking"
    }
  },
  hannahSweet: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ],
    description: {
      type: String,
      default: "Ideal for frying or baking"
    }
  },
  redBliss: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ],
    description: {
      type: String,
      default: "Ideal for roasting or boiling"
    }
  },
  frenchFingerling: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ],
    description: {
      type: String,
      default: "Ideal for roasting or boiling"
    }
  },
  russianBanana: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ],
    description: {
      type: String,
      default: "Ideal for roasting or boiling"
    }
  },
  redThumb: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ],
    description: {
      type: String,
      default: "Ideal for roasting or boiling"
    }
  },
  laRatte: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ],
    description: {
      type: String,
      default: "Ideal for roasting or boiling"
    }
  },
  austrianCrescent: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ],
    description: {
      type: String,
      default: "Ideal for roasting or boiling"
    }
  },
  yukonGold: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ],
    description: {
      type: String,
      default: "Ideal for pan-frying, roasting or stewing"
    }
  },
  redGold: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ],
    description: {
      type: String,
      default: "Ideal for pan-frying, roasting or stewing"
    }
  },
  purpleMajesty: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ],
    description: {
      type: String,
      default: "Ideal for pan-frying, roasting or stewing"
    }
  },
  redNorland: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ],
    description: {
      type: String,
      default: "Ideal for pan-frying, roasting or stewing"
    }
  },
  allBlue: {
    available: Boolean,
    details: [
      {
        packsWeight: String,
        price: Number,
        img: String
      }
    ],
    description: {
      type: String,
      default: "Ideal for pan-frying, roasting or stewing"
    }
  }
})

const Potato = mongoose.model("Potato", potatoSchema)

module.exports = Potato
