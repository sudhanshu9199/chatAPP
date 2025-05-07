import express from 'express';
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";


const app = express();
dotenv.config();
const port = process.env.PORT || 4003; // Set the port to the environment variable PORT or 4003

app.use(express.json({ extended: true, limit: '10mb'}));
app.use(cookieParser());
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`); // Log the port number to the console
    console.log(`http://localhost:${port}`); // Log the URL to the console
    connectDB();
});