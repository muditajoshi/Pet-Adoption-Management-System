const mongoose = require("mongoose");

const URI=process.env.MONGO_URI

mongoose.connect(URI)
  .then(() => console.log("MongoDB Atlas connected"))
  .catch(err => console.error("MongoDB error:", err));
