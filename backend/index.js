// Node.js Backend with Express
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

app.post("/webhook", (req, res) => {
  const data = req.body;

  // Validate payload
  if (!data.message || !data.senderID || !data.timestamp) {
    console.error("Invalid payload received.");
    res.status(400).send("Invalid payload received.");
    return;
  }

  console.log("Webhook received:", data);

  // Simulate webhook processing
  // You can perform any necessary actions based on the received data

  // Simulate unsuccessful delivery (for demonstration purposes)
  if (data.message.toLowerCase() === "error") {
    console.error("Simulated webhook delivery failure.");
    res.status(500).send("Simulated webhook delivery failure.");
    return;
  }

  res.status(200).send("Webhook received successfully.");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
