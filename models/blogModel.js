import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Blog requires a title"],
    },
    description: {
      type: String,
      required: [true, "Blog requires a description"],
    },
    image: {
      type: String,
      required: [true, "Blog requires an image"],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Blog must belong to a user"],
    },
  },
  {
    timestamps: true,
  }
);

export const Blog = mongoose.model("Blog", blogSchema);
