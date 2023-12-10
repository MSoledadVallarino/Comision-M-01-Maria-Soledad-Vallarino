import { Router } from "express";
import {
  ctrlCreateUser,
  ctrlLoginUser,
} from "../controllers/user.controller.js";

import {
  loginUserValidation,
  createUserValidations,
} from "../models/validations/user-validations.js";

const authRouter = Router();

authRouter.post("/login", loginUserValidation, ctrlLoginUser);

authRouter.post("/register", createUserValidations, ctrlCreateUser);

export { authRouter };
