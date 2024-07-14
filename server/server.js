import express from "express";
import cors from "cors";
import session from "express-session";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import multer from "multer";
import path from "path";

import authRoute from "./routes/auth.route.js";
import jobRoute from "./routes/job.route.js";
import applyRoute from "./routes/application.route.js";
import messageRoute from "./routes/message.route.js";

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
app.use(
  cors({
    origin: true, // Allows any origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allows any method
    credentials: true, // Allows cookies and other credentials
  })
);
app.use(express.static("uploads"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  session({
    secret: "thisissecretkey",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use("/api/auth", authRoute);
app.use("/api/job", jobRoute);
app.use("/api/apply", applyRoute);
app.use("/api/message", messageRoute);

app.get("/check", (req, res) => {
  if (req.session.userInfo) {
    res.json({ isLoggedIn: true, userInfo: req.session.userInfo });
  } else {
    res.json({ isLoggedIn: false, userInfo: null });
  }
});

app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log("Failed to destroy session");
      return res.status(500).send("Failed to logout");
    }
    res.sendStatus(200);
    console.log("good");
  });
});

app.post("/test", upload.single("profile-pic"), (req, res) => {
  console.log(req.body);
  res.send("good");
});

app.listen(8800, () => {
  console.log("Connected to backend.");
});
