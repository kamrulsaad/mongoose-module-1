import mongoose, { Model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

// type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema = new mongoose.Schema<IUser, UserModel, IUserMethods>({
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

userSchema.static("getAdminUsers",async function getAdminUsers() {
  const admins = await this.find({ role: "admin" });
    return admins;
});

userSchema.method("fullName", function fullName() {
  return this.name.fisrtName + " " + this.name.lastName;
});

const User = mongoose.model<IUser, UserModel>("User", userSchema);

export default User;
