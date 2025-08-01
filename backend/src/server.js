import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js";
import userRoutes from "./routes/user.route.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: ["https://social-app-dup.vercel.app", "http://localhost:5173"], // your actual frontend deployed URL
    credentials: true, // allow cookies and credentials
  })
);
const PORT = process.env.PORT || 5000;

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
export default app;
