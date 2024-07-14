import express from "express";
import {
  handleViewHired,
  handleHireApplicant,
  handleRejectApplication,
} from "../controllers/hire.controller.js";
import multer from "multer";

const router = express.Router();
const upload = multer();

router.get("/viewHired/:id", handleViewHired);
router.post("/hireApplicant", handleHireApplicant);
router.post("/rejectApplication", handleRejectApplication);

export default router;
