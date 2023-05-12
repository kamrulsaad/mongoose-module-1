import mongoose from "mongoose";
import { IUser } from "./user.interface";

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

export default User;