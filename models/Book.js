const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  authors: {
    type: Array,
    required: true,
  },
  publishedDate: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  cover_img: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("book", BookSchema);
