const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  volumeInfo: {
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
    },
    imageLinks: {
      smallThumbnail: {
        type: String,
        required: true,
      },
    },
  },
});

module.exports = mongoose.model("book", BookSchema);
