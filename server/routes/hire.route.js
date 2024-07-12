import express from "express";
import { handleViewHired, handleHireApplicant, handleRejectApplication } from "../controllers/hire.controller.js";
import multer from 'multer';

const router = express.Router();
const upload = multer();

router.get("/viewHired/", handleViewHired)
router.get("/hireApplicant/", handleHireApplicant)
router.get("/rejectApplication/", handleRejectApplication)



export default router;
