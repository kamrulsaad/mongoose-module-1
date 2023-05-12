import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (): Promise<IUser> => {
  const user = new User({
    id: "121",
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

  return user
};
