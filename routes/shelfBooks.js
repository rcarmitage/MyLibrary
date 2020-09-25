const express = require("express");
const router = express.Router();

const Book = require("../models/Book");

router.get("/", async (req, res) => {
  res.send(req.body);
});

router.post("/", async (req, res) => {
  res.send("Add book to shelfBooks");
});

router.delete("/:id", async (req, res) => {
  res.send("Delete book from shelfBooks");
});

module.exports = router;
