import { UserModel } from "../models/Users.js";
import * as bcrypt from "bcrypt";
import { createJWT } from "../utils/jwt.js";

export const ctrlCreateUser = async (req, res) => {
  try {
    const user = new UserModel(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const ctrlLoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ error: "Las credenciales son incorrectas" });
    }

    const token = await createJWT({ userId: user._id });
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ error: "El usuario no pudo loguearse" });
  }
};
