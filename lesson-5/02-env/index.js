import "dotenv/config";
import mongoose from "mongoose";

const DB_URI = process.env.DB_URI;

mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("Database connection success");
    process.exit(0);
  })
  .catch(() => console.error("Database connection error", error));
