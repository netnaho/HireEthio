import express from "express";
import {
  handleViewHired,
  handleViewContracts,
  handleHireApplicant,
  handleRejectApplication,
  rateFreelancer,
} from "../controllers/hire.controller.js";
import multer from "multer";

const router = express.Router();
const upload = multer();

router.get("/viewHired/:id", handleViewHired);
router.get("/view-contracts/:id", handleViewContracts);
router.post("/hireApplicant", handleHireApplicant);
router.post("/rejectApplication", handleRejectApplication);
router.post("/rate", rateFreelancer);

export default router;
