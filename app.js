import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/dbConnect.js";
import userRouter from "./routes/userRoute.js";

dotenv.config();

connectDB();
const app = express();

//Middlewares
app.use(express.json());

//Mounting the routes
app.use("/api/v1/users", userRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
