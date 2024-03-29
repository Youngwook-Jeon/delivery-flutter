const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const categoryRoute = require("./routes/categoryRoute");

const port = process.env.PORT || 8000;

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection has been established."))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/categories", categoryRoute);

app.listen(port, () =>
  console.log(`Backend for Foodly is running on port ${port}.`)
);
