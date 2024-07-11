import express from "express";
import authRoute from "./routes/auth.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import hireRoute from "./routes/hire.route.js"
import cors from 'cors';
import { connectDB } from "./config/db.js";


const app = express();
const port = 8000;

app.use(cors({
    origin: 'http://localhost:5173', // frontend's URL
    credentials: true
  }));

// Middleware, routes, etc.
// For example, you can use express.json() to parse JSON bodies
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/job", jobRoute);
app.use("/api/application", applicationRoute);
app.use("/api/hire", hireRoute);

// Example route
app.get("/", (req, res) => {
    res.send("Starting Server");
});


// Initialize the connection to the database and start the server
const startServer = async () => {
    try {
        await connectDB(); // Wait for the database connection to be established
        app.listen(port, () => {
            console.log(`Backend server is running on port ${port}`);

        });
    } catch (error) {
        console.error("Failed to start the server Becuase of:", error);
    }
};

startServer();
