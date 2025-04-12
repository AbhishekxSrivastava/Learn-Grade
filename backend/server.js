import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import geminiRoutes from "./geminiRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", geminiRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the Gemini AI API!");
});

// API endpoint to receive data from the frontend
app.post("/api/data", (req, res) => {
    console.log("Received JSON:", req.body);
    
    res.json({ message: "Data received successfully!", receivedData: req.body });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
