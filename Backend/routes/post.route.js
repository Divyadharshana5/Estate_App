import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.get("/", verifyToken, addPosts);
router.get("/:id", verifyToken, updatePosts);
router.get("/:id", verifyToken, deletePosts);

export default router;
