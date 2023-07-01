import { Blog } from "../models/blogModel.js";

export const getAllBlogs = async (req, res, next) => {
  let blogs;
  try {
    blogs = await Blog.find();
  } catch (err) {
    return console.log(err);
  }
  if (!blogs) {
    return res.status(404).json({ message: "No blogs found!" });
  }
  res.status(200).json({ blogs });
};

export const addBlog = async (req, res, next) => {
  const { title, description, image, user } = req.body;
  const blog = new Blog({
    title,
    description,
    image,
    user,
  });
  try {
    await blog.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(201).json({ blog });
};

export const getBlogById = async (req, res, next) => {
  const id = req.params.id;
  const blog = await Blog.findById(id);
  if (!blog) {
    return res.status(404).json({ message: "Blog not found!" });
  }
  return res.status(200).json({ blog });
};

export const updateBlog = async (req, res, next) => {
  const { title, description } = req.body;
  const id = req.params.id;
  const blog = await Blog.findByIdAndUpdate(id);
};
