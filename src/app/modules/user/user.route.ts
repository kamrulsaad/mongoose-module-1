import express from "express";
import { createUser, getAllAdminUsers, getUserById, getUsers } from "./user.controller";
const router = express.Router();

router.get("/", getUsers);
router.post("/create-user", createUser);
router.get("/admin", getAllAdminUsers);

router.get("/:id", getUserById); // always put dynamic route at the end

export default router;