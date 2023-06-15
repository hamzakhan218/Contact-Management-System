const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const connectDB = require("./config/db");
const router = require("./routes/auth");

const app = express();

//middlewares

app.use(express.json());
app.use(morgan("tiny"));
//routes

app.use("/api", router);

//server configurations

const PORT = process.env.PORT || 8000;

app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log("Server is listening on port " + PORT);
  } catch (error) {
    console.log(error);
  }
});
