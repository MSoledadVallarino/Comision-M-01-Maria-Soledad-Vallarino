import jwt from "jsonwebtoken";
import { config } from "../settings/config.js";

export const createJWT = async ({ userId }) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { userId },
      config.jwtSecret,
      {
        expiresIn: 86400,
      },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
};

export const verifyJWT = async ({ token }) => {
  return new Promise((resolve, reject) => {
    jwt.sign({ userId }, config.jwtSecret, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
};
