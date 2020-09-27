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
    type: Number,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  smallThumbnail: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("book", BookSchema);
