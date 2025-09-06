// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import { errorMiddleware } from "./middlewares/error.js";
// import reservationRouter from "./routes/reservationRoute.js";
// import { dbConnection } from "./database/dbConnection.js";

// const app = express();
// dotenv.config({ path: "./config/config.env" });

// app.use(
//   cors({
//     origin: [process.env.FRONTEND_URL],
//     methods: ["POST"],
//     credentials: true,
//   })
// );
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use("/api/v1/reservation", reservationRouter);
// app.get("/", (req, res, next)=>{return res.status(200).json({
//   success: true,
//   message: "HELLO WORLD AGAIN"
// })})

// dbConnection();

// app.use(errorMiddleware);

// export default app;


import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";

// Initialize Express app
const app = express();

// Load environment variables from config file
dotenv.config({ path: "./config/config.env" });

// CORS Configuration – allow only POST requests from your frontend
app.use(cors({
  origin: process.env.NODE_ENV === "development" 
    ? "http://localhost:5173" // Local frontend during development
    : process.env.FRONTEND_URL, // Production frontend URL
  methods: ["POST"], // Allow only POST requests
  credentials: true, // Allow cookies if you're using authentication
}));

// Middleware to parse incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API route
app.use("/api/v1/reservation", reservationRouter);

// Test route to confirm server is running
app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN",
  });
});

// Connect to MongoDB database
dbConnection();

// Error-handling middleware
app.use(errorMiddleware);

// Export the app
export default app;
