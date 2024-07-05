import express from "express";
import { handleLogin, handleRegister } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", handleRegister)
router.post("/login", handleLogin)
// router.post("/logout", logout)

export default router;
