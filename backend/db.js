import mysql from "mysql2";

const db = mysql.createPool({
  host: process.env.DB_HOST, // from Render environment
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: 3306,
});

//const db = mysql.createPool({
//host: "127.0.0.1", // your phpMyAdmin host
// user: "root", // phpMyAdmin username
//  password: "rocky", // leave blank if no password
// database: "schooldb", // your DB name
//});

// Test the connection
db.getConnection((err, connection) => {
  if (err) {
    console.error("❌ Database connection failed:", err.message);
  } else {
    console.log("✅ MySQL Database connected successfully!");
    connection.release(); // release back to pool
  }
});

export default db;
