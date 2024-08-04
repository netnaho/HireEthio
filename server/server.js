import express from "express";
import cors from "cors";
import session from "express-session";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import multer from "multer";
import path from "path";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

import authRoute from "./routes/auth.route.js";
import jobRoute from "./routes/job.route.js";
import applyRoute from "./routes/application.route.js";
import messageRoute from "./routes/message.route.js";
import hireRoute from "./routes/hire.route.js";

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
app.use("/api/hire", hireRoute);

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

const CHAPA_AUTH_KEY = process.env.CHAPA_AUTH_KEY;
app.post("/accept-payment", async (req, res) => {
  const {
    amount,
    currency,
    email,
    first_name,
    last_name,
    phone_number,
    tx_ref,
  } = req.body;
  try {
    const header = {
      headers: {
        Authorization: `Bearer ${CHAPA_AUTH_KEY}`,
        "Content-Type": "application/json",
      },
    };
    const body = {
      amount: amount,
      currency: currency,
      email: email,
      first_name: first_name,
      last_name: last_name,
      phone_number: phone_number,
      tx_ref: tx_ref,
      return_url: "http://localhost:5173/hires", // Set your return URL
    };
    let resp = "";
    await axios
      .post("https://api.chapa.co/v1/transaction/initialize", body, header)
      .then((response) => {
        resp = response;
      })
      .catch((error) => {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        res.status(400).json({
          message: error,
        });
      });
    res.status(200).json(resp.data);
  } catch (e) {
    res.status(400).json({
      error_code: e.code,
      message: e.message,
    });
  }
});

app.post("/test", upload.single("profile-pic"), (req, res) => {
  console.log(req.body);
  res.send("good");
});

app.listen(8800, () => {
  console.log("Connected to backend.");
});
