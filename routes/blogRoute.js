import express from "express";
import {
  getAllBlogs,
  addBlog,
  getBlogById,
  updateBlog,
} from "../controllers/blogController.js";

const router = express.Router();

router.get("/", getAllBlogs);
router.post("/", addBlog);

router.get("/:id", getBlogById);
router.put("/:id", updateBlog);
router.delete("/:id");

export default router;
