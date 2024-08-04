import express from "express";
import {
  handleViewHired,
  handleViewContracts,
  handleHireApplicant,
  handleRejectApplication,
  rateFreelancer,
  paymentCompleted,
  seeRating,
} from "../controllers/hire.controller.js";
import multer from "multer";

const router = express.Router();
const upload = multer();

router.get("/viewHired/:id", handleViewHired);
router.get("/view-contracts/:id", handleViewContracts);
router.post("/hireApplicant", handleHireApplicant);
router.post("/rejectApplication", handleRejectApplication);
router.post("/rate", rateFreelancer);
router.post("/payment-complete", paymentCompleted);
router.get("/see-rating/:id", seeRating);

export default router;
