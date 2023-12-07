import { verifyJWT } from "../utils/jwt.js";
import { UserModel } from "../models/Users.js";

export const validateToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const { userId } = await verifyJWT({ token });

    const user = await UserModel.findOne({ _id: userId });
    if (!user) {
      return res.status(401).json({ message: "Invalid token" });
    }
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
