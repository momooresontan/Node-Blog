import express from "express";
import {
  getAllBlogs,
  addBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
} from "../controllers/blogController.js";
import { validateToken } from "../middlewares/validateTokenHandler.js";

const router = express.Router();

router.get("/", getAllBlogs);
router.post("/", validateToken, addBlog);

router.get("/:id", getBlogById);
router.put("/:id", validateToken, updateBlog);
router.delete("/:id", validateToken, deleteBlog);

export default router;
