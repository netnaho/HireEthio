import express from "express";
import {
  applyToJob,
  getApplications,
  deleteApplication,
  getJobApplicants,
} from "../controllers/application.controller.js";

const router = express.Router();

router.post("/apply-to-job", applyToJob);
router.get("/get-applications/:id", getApplications);
router.get("/get-job-applicants/:id", getJobApplicants);
router.delete("/delete-application/:id", deleteApplication);

export default router;
