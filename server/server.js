const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect db
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Connected");
});

// Init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.json({ msg: "Server running" }));

// Route - potentially move all into server.js
app.use("/api/shelfBooks", require("./routes/shelfBooks"));

app.listen(PORT, console.log(`Server started on port ${PORT}`));