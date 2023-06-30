import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "User name required!"],
      unique: [true, "User name already taken!"],
    },
    email: {
      type: String,
      required: [true, "User email required!"],
      unique: [true, "User email already used!"],
    },
    password: {
      type: String,
      required: [true, "User password required!"],
      minlength: [8, "Password must have at least 8 characters!"],
    },
    role: {
      type: String,
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
