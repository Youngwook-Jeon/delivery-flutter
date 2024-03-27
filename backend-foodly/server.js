const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const port = process.env.PORT || 8000;

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection has been established."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello"));
app.listen(port, () =>
  console.log(`Backend for Foodly is running on port ${port}.`)
);
