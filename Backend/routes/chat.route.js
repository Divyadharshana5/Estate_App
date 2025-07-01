import express from "express";
import {} from "../Controllers/chat.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/search/:id", verifyToken, getchats);
router.get("/search/:id", verifyToken, getchat);
router.post("/", verifyToken, addChat);
router.post("/read/", verifyToken, addChat);
router.get("/profilePosts", verifyToken, profilePosts);

export default router;
