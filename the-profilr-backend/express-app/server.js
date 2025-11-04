import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./src/config/db.js";
import { Review } from "./src/models/Review.js";
import cors from "cors";

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://the-profilr.onrender.com",
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

await connectDB();

app.get("/", (req, res) => {
  res.send("Profilr backend is running");
});

// --- CREATE REVIEW ---
app.post("/api/reviews", async (req, res) => {
  try {
    const { name, role, comment } = req.body;

    if (!name || !role || !comment) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const review = await Review.create({ name, role, comment });
    res.status(201).json({ message: "Review added", review });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// --- GET ALL REVIEWS ---
app.get("/api/reviews", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});


app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
