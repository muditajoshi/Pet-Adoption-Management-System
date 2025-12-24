const mongoose = require("mongoose");

const petSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    species: { type: String, required: true },
    breed: String,
    age: { type: Number, required: true },
    description: String,
    photoUrl: String,
    status: {
      type: String,
      enum: ["AVAILABLE", "PENDING", "ADOPTED"],
      default: "AVAILABLE",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pet", petSchema);
