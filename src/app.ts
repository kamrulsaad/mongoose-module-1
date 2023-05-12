import cors from "cors";
import express from "express";
import { Application } from "express";

const app: Application = express();

// app routes
import userRoutes from "./app/modules/user/user.route";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoutes);

export default app;
