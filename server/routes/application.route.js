import express from "express";
import {
  applyToJob,
  getApplications,
  deleteApplication,
  getJobApplicants,
  checkApplicant,
} from "../controllers/application.controller.js";

const router = express.Router();

router.post("/apply-to-job", applyToJob);
router.get("/get-applications/:id", getApplications);
router.get("/get-job-applicants/:id", getJobApplicants);
router.delete("/delete-application/:id", deleteApplication);
router.post("/check-applicant", checkApplicant);

export default router;
