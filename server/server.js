
const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Backend home route
app.get("/", (req, res) => {
  res.send("IT Soft backend is running!");
});

// API status route
app.get("/api/status", (req, res) => {
  res.json({
    success: true,
    message: "IT Soft API is working!",
    backend: "Node.js + Express"
  });
});

// Contact form API
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof subject !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !subject.trim() || 
      !message.trim()   
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all fields."
      });
    }


    const contact = await prisma.contact.create({
      data: {
        name: name.trim(),
        email: email.trim(),
        subject: subject.trim(),
        message: message.trim()
      }
    });

    return res.status(201).json({
      success: true,
      message: "Contact form submitted successfully!",
      id: contact.id
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to save contact form."
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
