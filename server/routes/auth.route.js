import express from "express";
import {
  handleLogin,
  handleFreelancerRegister,
  handleClientRegister,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/freelancer-register", handleFreelancerRegister);
router.post("/client-register", handleClientRegister);
router.post("/login", handleLogin);
// router.post("/logout", logout)

export default router;
