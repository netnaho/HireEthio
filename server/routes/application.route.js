import express from "express";
import { handleViewApplicantsForSpecificJob } from "../controllers/application.controller.js";

const router = express.Router();

router.post("/viewSpecificJobApplicants/", handleViewApplicantsForSpecificJob)


export default router;
