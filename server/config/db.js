const mongoose = require("mongoose");

require("dotenv").config();

const dbURI = process.env.MONGODB_URI;
console.log("Connecting to MongoDB URI: ", dbURI);

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(dbURI);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = { mongoConnect, mongoDisconnect };
