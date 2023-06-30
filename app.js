import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/dbConnect.js";
import router from "./routes/userRoute.js";

dotenv.config();

connectDB();
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
