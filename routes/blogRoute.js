import express from "express";
import { getAllBlogs } from "../controllers/blogController.js";

const router = express.Router();

router.get("/", getAllBlogs);

router.post("/");

export default router;
