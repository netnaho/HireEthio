import express from "express";
import multer from "multer";
import path from "path";
import {
  handleLogin,
  handleFreelancerRegister,
  handleClientRegister,
} from "../controllers/auth.controller.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

router.post(
  "/freelancer-register",
  upload.single("profile-pic"),
  handleFreelancerRegister
);
router.post(
  "/client-register",
  upload.single("profile-pic"),
  handleClientRegister
);
router.post("/login", handleLogin);
// router.post("/logout", logout)

export default router;
