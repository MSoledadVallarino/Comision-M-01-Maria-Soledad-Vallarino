import { validationResult } from "express-validator";

export const applyValidator = (req, res, next) => {
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
