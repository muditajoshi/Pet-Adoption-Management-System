const express = require("express");
require("dotenv").config();
const cors = require("cors");
const config = require("./utils/config");
const userRoutes =require("./routes/userRoutes");
const petRoutes = require("./routes/petRoutes");
const adoptionRoutes = require("./routes/adoptionRoutes");
const morgan = require("morgan");

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("combined"));

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).send("Alive");
});

app.use("/api/auth", userRoutes);
app.use("/api/pet", petRoutes);
app.use("/api/adoption", adoptionRoutes);

module.exports = app;
