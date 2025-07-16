import express from "express";
import {
  getChats,
  addChats,
  readChat,
  getChat,
} from "../Controllers/chat.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/search/:id", verifyToken, getChat);
router.get("/", verifyToken, getChats);
router.post("/", verifyToken, addChats);

router.put("/read/:id", verifyToken, readChat);

export default router;
