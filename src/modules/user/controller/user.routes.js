// Joi

import express from "express";
import { sigup, sigin, updateUser ,deleteUser , searchUser ,
    searchByAge ,
    allUser ,userProfial } from "../user.controller.js";
const userRoutes = express.Router();

userRoutes.post("/user/singup", sigup);

userRoutes.post("/user/singin", sigin);
userRoutes.put("/user/:id", updateUser);
userRoutes.delete("/user/:id", deleteUser);
userRoutes.get("/users/search", searchUser);
userRoutes.get("/users/searchByAge", searchByAge);
userRoutes.get("/user", allUser);
userRoutes.get("/users/:id/profile", userProfial);

export default userRoutes;


