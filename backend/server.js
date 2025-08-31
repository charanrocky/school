import express from "express";
import cors from "cors";
import schoolsRoutes from "./routes/schools.js";
import dotenv from "dotenv";
import db from "./db.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/schools", schoolsRoutes);

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
