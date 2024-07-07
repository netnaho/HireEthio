import express from "express";
import cors from "cors";

import authRoute from "./routes/auth.route.js";
import jobRoute from "./routes/job.route.js";

const app = express();

const port = 8000;

// Middleware, routes, etc.
// For example, you can use express.json() to parse JSON bodies
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/job", jobRoute);

app.listen(8800, () => {
  console.log("Connected to backend.");
});
