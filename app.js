import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import * as connectDB from "./config/dbConnect.js";

dotenv.config();

connectDB.connectDB();
const app = express();

app.use("/", (req, res, next) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
