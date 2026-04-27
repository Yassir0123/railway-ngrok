const express = require("express");
const app = express();

app.use(express.json());

// test route (IMPORTANT)
app.get("/", (req, res) => {
  res.send("alive");
});

// your webhook route
app.post("/webhook", (req, res) => {
  console.log("Received:", req.body);
  res.sendStatus(200);
});

// dynamic port (already correct)
const PORT = process.env.PORT || 5555;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});