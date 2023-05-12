import cors from "cors";
import express from "express";
import { Application, Request, Response, NextFunction } from "express";
import { use } from "express/lib/application";
import mongoose from "mongoose";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  // interface => Schema => Model => Query
  interface IUser {
    id: string;
    role: "student";
    password: string;
    name: {
      fisrtName: string;
      middleName?: string;
      lastName: string;
    };
    dateOfBirth?: string;
    gender: "male" | "female";
    email?: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;
  }

  // creating Schema using interface

  const userSchema = new mongoose.Schema<IUser>({
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
    name: {
      fisrtName: { type: String, required: true },
      middleName: { type: String },
      lastName: { type: String, required: true },
    },
    dateOfBirth: { type: String },
    email: { type: String },
    gender: { type: String, required: true, enum: ["male", "female"] },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
  });

  const User = mongoose.model<IUser>("User", userSchema);

  const createUserToDB = async (): Promise<void> => {
    const user = new User({
      id: "123",
      role: "student",
      password: "123",
      name: {
        fisrtName: "John",
        middleName: "Doe",
        lastName: "Doe",
      },
      dateOfBirth: "12-12-12",
      emergencyContactNo: "123",
      contactNo: "123",
      email: "123",
      presentAddress: "123",
      permanentAddress: "123",
      gender: "male",
    });
    user.save();
  };

  createUserToDB();

    res.send("Hello World!");
    next();
});

export default app;
