import express from "express";
import {
  handleJobPost,
  getAllJobs,
  getClientJobs,
  deleteJob,
  handleViewActiveJobs,
  handleJobComplete,
} from "../controllers/job.controller.js";

const router = express.Router();

router.post("/post-job", handleJobPost);
router.get("/all-jobs", getAllJobs);
router.get("/client-jobs/:id", getClientJobs);
router.delete("/delete-job/:id", deleteJob);
router.get("/ActiveJobs/:id", handleViewActiveJobs);
router.post("/CompleteJob", handleJobComplete);
// router.post("/login", handleLogin)
// router.post("/logout", logout)

export default router;
