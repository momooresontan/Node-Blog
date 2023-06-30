import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DB = process.env.DB_CONNECTION_STRING.replace(
  "<password>",
  process.env.DB_PASSWORD
);

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(DB);
    console.log(
      `Databaste connected: ${connect.connection.host} ${connect.connection.name}`
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
