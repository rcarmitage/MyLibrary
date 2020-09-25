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
  res.send("Add book to shelfBooks");
});

router.delete("/:id", async (req, res) => {
  res.send("Delete book from shelfBooks");
});

module.exports = router;
