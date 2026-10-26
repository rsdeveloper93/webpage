
const express = require("express");

const app = express();

// React se aane wala JSON data read karne ke liye
app.use(express.json());

const PORT = 5000;

// Route 1: Backend homepage
app.get("/", (req, res) => {
  res.send("IT Soft backend is running!");
});

// Route 2: API status
app.get("/api/status", (req, res) => {
  res.json({
    success: true,
    message: "IT Soft API is working!",
    backend: "Node.js + Express"
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
