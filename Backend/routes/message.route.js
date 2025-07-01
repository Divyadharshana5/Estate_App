import express from "express";
import { addMessage } from "../Controllers/user.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/save", verifyToken, savePost);
router.get("/profilePosts", verifyToken, profilePosts);

export default router;
