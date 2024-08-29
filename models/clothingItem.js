const mongoose = require("mongoose");
const validator = require('validator');

const clothingItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  weather: {
    required: true,
    type: String,
    enum: ["hot", "warm", "cold"],
  },
  imageUrl: {
    required: true,
    type: String,
    validate: {
      validator(value) {
        return validator.isURL(value);
      },
      message: 'You must enter a valid URL',
    }
  },
  owner: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: 'itemAuthor'
  },
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'user'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model("clothingItems", clothingItemSchema);