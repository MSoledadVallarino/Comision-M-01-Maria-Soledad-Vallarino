import jwt from "jsonwebtoken";
import { config } from "../settings/config.js";

export const createJWT = async ({ userId }) => {
  return new Promise((res, rej) => {
    jwt.sign({ userId }, config.jwt_secret, (err, token) => {
      if (err) rej(err);
      res(token);
    });
  });
};

export const verifyJWT = async ({ token }) => {
  return new Promise((res, rej) => {
    jwt.verify(tokebn, config.jwt_Secret, (err, decoded) => {
      if (err || !decoded.userId) rej("Invalid token");
      res(decoded);
    });
  });
};
