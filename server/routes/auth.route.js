import express from "express";
import { handleLogin, handleRegister } from "../controllers/auth.controller.js";
import multer from 'multer';
import path from 'path';

const router = express.Router();

// Multer configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/') // Directory where files will be stored
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // File naming
    }
});

const upload = multer({ storage: storage });

router.post("/register", upload.single('profilePicture'), handleRegister);
router.post("/login", handleLogin);

export default router;
