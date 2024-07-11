import express from "express";
import { handleViewHired } from "../controllers/hire.controller.js";
import multer from 'multer';

const router = express.Router();
const upload = multer();

router.get("/viewHired/", handleViewHired)


export default router;
