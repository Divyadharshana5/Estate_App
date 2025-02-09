import express from "express";
import { shoulBeAdmin, shouldBeLoggedIn } from "../Controllers/test.controller";

const router = express.Router();

router.get("/should-be-logged-in", shouldBeLoggedIn);

router.get("/should-be-admin", shoulBeAdmin);
export default router;
