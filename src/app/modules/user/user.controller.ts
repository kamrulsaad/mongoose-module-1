import { NextFunction, Request, Response } from "express";
import {
  createUserToDB,
  getAllAdminUsersService,
  getUserByIdFromDB,
  getUsersFromDB,
} from "./user.service";

export const createUser = async (req: Request, res: Response) => {
  const user = await createUserToDB(req.body);
  res.status(200).json({
    status: "success",
    data: user,
  });
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await getUsersFromDB();
  res.status(200).json({
    status: "success",
    data: users,
  });
};

export const getUserById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = await getUserByIdFromDB(id);
  res.status(200).json({
    status: "success",
    data: user,
  });
};

export const getAllAdminUsers = async (req: Request, res: Response) => {
  const admins = await getAllAdminUsersService();
  res.status(200).json({
    status: "success",
    data: admins,
  });
};
