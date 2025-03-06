const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// API Route
app.get("/quote", async (req, res) => {
  try {
    const response = await fetch("https://api.quotable.io/random");
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching quote:", error.message);
    res.status(500).json({ error: "Failed to fetch quote" });
  }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
