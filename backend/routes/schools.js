import express from "express";
import multer from "multer";
import path from "path";
import db from "../db.js";

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

// Add school
router.post("/add", upload.single("image"), async (req, res) => {
  try {
    const { name, address, city, state, contact, email_id } = req.body;
    const image = req.file.filename;

    await db.execute(
      "INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [name, address, city, state, contact, image, email_id]
    );

    res.json({ message: "School added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", (req, res) => {
  const sql = "SELECT * FROM schools";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("❌ Error fetching schools:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(results); // <-- MUST return array
  });
});
export default router;
