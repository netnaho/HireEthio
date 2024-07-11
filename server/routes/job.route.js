import express from "express";
import { handleJobPost, viewJobPost, deleteJob } from "../controllers/job.controller.js";
import multer from 'multer';

const router = express.Router();
const upload = multer();

router.post("/post/",upload.none(), handleJobPost)
router.get("/view/", viewJobPost)  
router.get("/delete/", deleteJob)

export default router;
