import express from "express";
import {
  getchats,
  getchat,
  addChat,
  readChat,
} from "../Controllers/chat.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/search/:id", verifyToken, getchats);
router.get("/search/:id", verifyToken, getchat);
router.post("/", verifyToken, addChat);
router.post("/read/:id", verifyToken, readChat);

export default router;
