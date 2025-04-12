import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

router.post("/gemini", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const response = await axios.post(
      GEMINI_API_URL,
      {
        contents: [{ parts: [{ text: prompt }] }],
      },
      { headers: { "Content-Type": "application/json" } }
    );

    res.json({ response: response.data });
  } catch (error) {
    console.error(
      "❌ Gemini API Error:",
      error.response?.data || error.message
    );
    res.status(500).json({ error: "Failed to fetch response from Gemini API" });
  }
});

export default router;
