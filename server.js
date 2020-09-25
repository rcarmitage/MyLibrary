const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect db
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.json({ msg: "Server running" }));

// Route - potentially move all into server.js
app.use("/api/shelfBooks", require("./routes/shelfBooks"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
