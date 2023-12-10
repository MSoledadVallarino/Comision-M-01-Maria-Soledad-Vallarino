import { body } from "express-validator";
import { applyValidator } from "../../middlewares/apply-validation.js";
import { UserModel } from "../Users.js";

export const createUserValidations = [
  body("avatar")
    .notEmpty()
    .withMessage("El campo {avatar} no puede estar vacio")
    .isString()
    .withMessage("El campo {avatar} debe ser un string")
    .isURL()
    .withMessage("El campo {avatar} debe ser un URL valida"),

  body("email")
    .notEmpty()
    .withMessage("El campo {email} no puede estar vacio")
    .isEmail()
    .withMessage("El campo {email} debe ser un email valido")
    .custom(async (value) => {
      const user = await UserModel.findOne({ email: value });
      if (user) throw new Error("El email ya se encuentra registrado");
      return true;
    }),

  body("username")
    .notEmpty()
    .withMessage("El campo {username} no puede estar vacio")
    .isString()
    .withMessage("El campo {username} debe ser un string")
    .isLength({ min: 5 })
    .withMessage("El campo {username} debe tener al menos 5 caracteres")
    .custom(async (value) => {
      const user = await UserModel.findOne({ username: value });
      if (user) throw new Error("El username ya se encuentra registrado");
      return true;
    }),

  body("password")
    .notEmpty()
    .withMessage("El campo {password} no puede estar vacio")
    .isString()
    .withMessage("El campo {password} debe ser un string")
    .isLength({ min: 6 })
    .withMessage("El campo {password} debe tener al menos 6 caracteres"),
  applyValidator,
];

export const loginUserValidation = [
  body("email")
    .notEmpty()
    .withMessage("El campo {email} no puede estar vacio")
    .isEmail()
    .withMessage("El campo {email} debe ser un email valido"),
  body("password")
    .notEmpty()
    .withMessage("El campo {password} no puede estar vacio")
    .isString()
    .withMessage("El campo {password} debe ser un string"),
  applyValidator,
];
