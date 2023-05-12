import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (data: IUser): Promise<IUser> => {
  const user = new User(data);
  user.save();

  console.log(user.fullName());

  return user;
};

export const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const getUserByIdFromDB = async (id: string): Promise<IUser | null> => {
  const user = await User.findOne(
    { id },
    {
      name: 1,
      contactNo: 1,
    }
  );
  return user;
};

export const getAllAdminUsersService = async () => {
  const admins = await User.getAdminUsers();
  return admins;
};
