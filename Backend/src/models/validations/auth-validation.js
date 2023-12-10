import { header } from "express-validator";
import { applyValidator } from "../../middlewares/apply-validation.js";

export const authHeader = [
  header("authorization")
    .exists()
    .withMessage("Debe enviar el header { Authorization} con el token"),
  applyValidator,
];
