import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";

// Initialize app
const app = express();

// Load environment variables
dotenv.config({ path: "./config/config.env" });

// Setup CORS before routes
app.use(cors({
  origin: process.env.FRONTEND_URL,  // frontend’s URL from .env
  methods: ["POST", "OPTIONS"],      // allow POST and OPTIONS requests
  credentials: true,                 // allow cookies if needed
}));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/reservation", reservationRouter);

// Health check route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running!",
  });
});

// Connect to MongoDB
dbConnection();

// Error handling middleware
app.use(errorMiddleware);


export default app;
