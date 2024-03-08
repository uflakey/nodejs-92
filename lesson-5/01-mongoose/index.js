import mongoose from "mongoose";

const DB_URI = `mongodb+srv://uflakey:ccLXP9JBbgLYdbNl@cluster0.cvmdku9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("Database connection success");
    process.exit(0);
  })

  .catch(() => console.error("Database connection error", error));
