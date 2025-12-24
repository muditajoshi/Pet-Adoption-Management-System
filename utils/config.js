const mongoose = require("mongoose");

const URI = process.env.MONGO_URI;

async function connectDB() {
  try {
    const m = await mongoose.connect(URI);
    console.log("MongoDB Atlas connected");
    return m.connection;
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw err;
  }
}

module.exports = connectDB;
