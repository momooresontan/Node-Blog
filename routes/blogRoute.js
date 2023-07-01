import express from "express";
import {
  getAllBlogs,
  addBlog,
  getBlogById,
} from "../controllers/blogController.js";

const router = express.Router();

router.get("/", getAllBlogs);
router.post("/", addBlog);

router.get("/:id", getBlogById);
router.put("/:id");

export default router;
