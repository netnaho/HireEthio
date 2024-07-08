import express from "express";
import cors from "cors";
import multer from "multer";
import path from "path";

import authRoute from "./routes/auth.route.js";
import jobRoute from "./routes/job.route.js";

const app = express();

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

// Middleware, routes, etc.
// For example, you can use express.json() to parse JSON bodies
app.use(express.json());
app.use(cors());
app.use(express.static("uploads"));

app.use("/api/auth", authRoute);
app.use("/api/job", jobRoute);

app.post("/test", upload.single("profile-pic"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
});

app.listen(8800, () => {
  console.log("Connected to backend.");
});
