import { header, param, body } from "express-validator";
import { isValidObjectId } from "mongoose";
import { applyValidator } from "../../middlewares/apply-validation.js";

export const createPostValidator = [
  body("title")
    .notEmpty()
    .withMessage("El campo { title } no puede estar vacio")
    .isString()
    .withMessage("El campo { title } debe ser un string"),
  body("description")
    .notEmpty()
    .withMessage("El campo { description } no puede estar vacio")
    .isString()
    .withMessage("El campo { description } debe ser un string"),
  body("imageURL")
    .notEmpty()
    .withMessage("El campo { imageURL } no debe estar vacio")
    .isURL()
    .withMessage("El campo { imageURL } debe ser una url valida"),
  applyValidator,
];

export const listPostValidator = [
  header("authorization").exists(),
  applyValidator,
];

export const getPostValidator = [
  param("postId")
    .notEmpty()
    .withMessage("El parametro {postId} no debe estar vacio")
    .isString()
    .withMessage("El parametro {postId} debe ser un string")
    .custom(isValidObjectId)
    .withMessage("El parametro {postId} debe ser un id valida"),
  applyValidator,
];

export const updatePostValidator = [
  param("postId")
    .notEmpty()
    .withMessage("El parametro { postId } no puede estar vacio")
    .isString()
    .withMessage("El parametro { postId } debe ser un string")
    .custom(isValidObjectId)
    .withMessage("El parametro { postId } debe ser un id valida"),
  body("title")
    .optional()
    .isString()
    .withMessage("El campo {title} debe ser un string")
    .optional()
    .notEmpty()
    .withMessage("El campo {description} no puede estar vacio")
    .isString()
    .withMessage("El campo {description} debe ser un string"),
  body("imageURL")
    .optional()
    .notEmpty()
    .isURL()
    .withMessage("El campo { imageURL } debe ser una url valida"),
  applyValidator,
];

export const deletePostValidator = [
  param("postId")
    .notEmpty()
    .withMessage("El parametro { postId } no debe estar vacio")
    .isString()
    .withMessage("El parametro { postId } debe ser un string")
    .custom(isValidObjectId)
    .withMessage("El parametro { postId } debe ser un id valida"),
  applyValidator,
];
