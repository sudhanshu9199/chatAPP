import express from 'express';
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";


import { connectDB } from "./lib/db.js";
const app = express();
dotenv.config();
const port = process.env.PORT || 4003; // Set the port to the environment variable PORT or 4003

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`); // Log the port number to the console
    console.log(`http://localhost:${port}`); // Log the URL to the console
    connectDB();
});