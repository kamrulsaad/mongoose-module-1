import mongoose from "mongoose";
import express from "express";
import cors from "cors";
const app = express();
const port : number = 5000;

app.use(cors());

//database connection

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/module-1");
    console.log("❤️  Database connected successfully");

    app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
    });
  } catch (error) {
    console.log("❌Database connection failed", error);
  }
}

connect();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
