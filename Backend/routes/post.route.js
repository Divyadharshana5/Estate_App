import express from "express";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.get("/", verifyToken, addPosts);
router.get("/:id", verifyToken, updatePosts);
router.get("/:id", verifyToken, deletePosts);

export default router;
