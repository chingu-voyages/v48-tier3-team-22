const express = require("express");
const cors = require("cors");
const path = require("path");
const { mongoConnect } = require("./config/db");
require("dotenv").config();

const userRoutes = require("./Routes/userRoutes");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// API endpoint
app.use("/api", userRoutes);

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

async function startServer() {
  await mongoConnect();

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}
startServer();
