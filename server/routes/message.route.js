import express from "express";
import {
  createMessagePortal,
  getClientChatList,
  getFreelancerChatList,
  getSingleChatMessages,
  sendMessage,
} from "../controllers/message.controller.js";

const router = express.Router();

router.post("/create-message", createMessagePortal);
router.get("/freelancer-chat/:id", getFreelancerChatList);
router.get("/client-chat/:id", getClientChatList);
router.get("/get-chat-messages/:id", getSingleChatMessages);
router.post("/send-message", sendMessage);
// router.post("/login", handleLogin)
// router.post("/logout", logout)

export default router;
