import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./src/config/db.js";
import { Review } from "./src/models/Review.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL,
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (
        !origin ||
        origin.includes("localhost:5173") ||
        origin.includes("the-profilr.onrender.com")
      ) {
        callback(null, true);
      } else {
        console.log("🚫 Blocked by CORS:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);

app.options("*", cors());

app.use(express.json());

await connectDB();

app.get("/", (req, res) => {
  res.send("Profilr backend is running");
});

app.post("/api/reviews", async (req, res) => {
  try {
    const { name, role, comment } = req.body;

    if (!name || !role || !comment) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const review = await Review.create({ name, role, comment });
    res.status(201).json({ message: "Review added", review });
  } catch (error) {
    console.error("❌ Error adding review:", error);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/api/reviews", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    console.error("❌ Error fetching reviews:", error);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
