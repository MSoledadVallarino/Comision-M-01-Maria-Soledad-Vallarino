import { Router } from "express";
import {
  ctrlCreateUser,
  ctrlLoginUser,
} from "../controllers/user.controller,js";

const authRouter = Router();

userRouter.post("/login", ctrlLoginUser);

userRouter.post("/register", ctrlCreateUser);

export { authRouter };
