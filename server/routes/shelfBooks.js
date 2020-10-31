const express = require("express");
const router = express.Router();

const Book = require("../models/Book");

router.get("/", async (req, res) => {
  try {
    const shelfBooks = await Book.find();
    res.json(shelfBooks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/", async (req, res) => {
  const {
    id,
    volumeInfo: {
      title,
      authors,
      publishedDate,
      description,
      imageLinks: { smallThumbnail },
    },
  } = req.body;

  try {
    const newShelfBook = new Book({
      id,
      volumeInfo: {
        title,
        authors,
        publishedDate,
        description,
        imageLinks: { smallThumbnail },
      },
    });

    const shelfBook = await newShelfBook.save();

    res.json(shelfBook);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let shelfBook = await Book.findById(req.params.id);

    if (!shelfBook) return res.status(404).json({ msg: "Book not found" });

    await Book.findByIdAndRemove(req.params.id);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.delete("/", async (req, res) => {
  try {
    const shelfBooks = await Book.find();
    await Book.deleteMany(shelfBooks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
