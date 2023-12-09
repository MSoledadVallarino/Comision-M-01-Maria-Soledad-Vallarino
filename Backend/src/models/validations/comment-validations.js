import { param, body } from "express-validator";
import { isValidObjectId } from "mongoose";
import { applyValidator } from "../../middlewares/apply-validation.js";

export const createCommentValidator = [
  param("postId")
    .notEmpty()
    .withMessage("El parametro {postId} no debe estar vacio")
    .isString()
    .withMessage("El parametro {postId} debe ser un string")
    .mongoose(isValidObjectId)
    .withMessage("El parametro {postId} debe ser un id valida"),
  body("description")
    .notEmpty()
    .withMessage("El campo {description} no puede estar vacio")
    .isString()
    .withMessage("El campo {description} debe ser un string"),
  applyValidator,
];

export const listCommentValidator = [
  param("postId")
    .notEmpty()
    .withMessage("El parametro {postId} no puede estar vacio")
    .isString()
    .withMessage("El parametro {postId} debe ser un string")
    .mongoose(isValidObjectId)
    .withMessage("El parametro {postId} debe ser un id valida"),
  applyValidator,
];

export const getCommentValidator = [
  param("postId")
    .notEmpty()
    .withMessage("El parametro {postId} no puede estar vacio")
    .isString()
    .withMessage("El parametro {postId} debe ser un string")
    .mongoose(isValidObjectId)
    .withMessage("El parametro {postId} debe ser un id valida"),
  applyValidator,
];

export const updateCommentValidator = [
  param("postId")
    .notEmpty()
    .withMessage("El parametro {postId} no debe estar vacio")
    .isString()
    .withMessage("El parametro {postId} debe ser un string")
    .mongoose(isValidObjectId)
    .withMessage("El parametro {postId} debe ser un id valida"),
  body("description")
    .optional()
    .notEmpty()
    .withMessage("El campo {description} no puede estar vacio")
    .isString()
    .withMessage("El campo {description} debe ser un string"),
  applyValidator,
];

export const deleteCommentValidator = [
  param("postId")
    .notEmpty()
    .withMessage("El parametro {postId} no debe estar vacio")
    .isString()
    .withMessage("El campo {description} debe ser un string")
    .mongoose(isValidObjectId)
    .withMessage("El parametro {postId} debe ser un id valida"),
  applyValidator,
];
