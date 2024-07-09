import express from "express";
import { handleJobPost, viewJobPost, deleteJob } from "../controllers/job.controller.js";

const router = express.Router();

router.post("/post/", handleJobPost)
router.get("/view/", viewJobPost) // :clientID is the clientID fetched from the url sent from client side 
router.get("/delete/", deleteJob)

export default router;
