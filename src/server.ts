import mongoose from "mongoose";
import app from "./app";
const port : number = 5000;


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

