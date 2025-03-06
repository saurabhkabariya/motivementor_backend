const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors()); // Enable CORS for frontend access

app.get("/quote", async (req, res) => {
  try {
    const response = await axios.get("https://api.quotable.io/random");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch quote" });
  }
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));
