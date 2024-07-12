import express from "express";
import { handleJobPost, viewJobPost, deleteJob, handleJobUpdate, handleViewActiveJobs, handleJobComplete } from "../controllers/job.controller.js";
import multer from 'multer';

const router = express.Router();
const upload = multer();

router.post("/post/",upload.none(), handleJobPost)
router.post("/update/",upload.none(), handleJobUpdate)
router.get("/view/", viewJobPost)  
router.get("/delete/", deleteJob)
router.get("/ActiveJobs/", handleViewActiveJobs)
router.get("/CompleteJob/", handleJobComplete)

export default router;
