import express from "express";
import { handleJobPost } from "../controllers/job.controller.js";

const router = express.Router();

router.post("/post", handleJobPost)
// router.post("/login", handleLogin)
// router.post("/logout", logout)

export default router;
