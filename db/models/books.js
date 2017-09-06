const mongoose  = require('mongoose');

const BookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
    unique: false,
  },
  publisher: {
    type: String,
    required: true,
    trim: true,
    unique: false,
  },
  image: {
    type: String,
    required: false,
    trim: true,
    unique: true,
  },
  borrowed: {
    type: String,
    required: true,
    trim: true,
  },
  blurb: {
    type: String,
    required: false,
    unique: true,
    trim: true,
  }
});

module.exports = mongoose.model('Books', BookSchema);