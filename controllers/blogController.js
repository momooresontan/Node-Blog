import { Blog } from "../models/blogModel.js";

export const getAllBlogs = async (req, res, next) => {
  let blogs;
  try {
    blogs = await Blog.find();
  } catch (err) {
    return console.log(err);
  }
  if (!blog) {
    return res.status(404).json({ message: "No blogs found!" });
  }
  res.status(200).json({ blogs });
};
