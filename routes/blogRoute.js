import express from "express";
import { getAllBlogs, addBlog } from "../controllers/blogController.js";

const router = express.Router();

router.get("/", getAllBlogs);

router.post("/", addBlog);

export default router;
