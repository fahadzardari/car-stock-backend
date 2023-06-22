import { authServices } from "../services/auth.services.js";
import convertUserDataToObject from "../helpers/convertUserDataToObject.js";
export const authController = {
  login: async (req, res) => {
    try {
      const user = { email: req.body.email, password: req.body.password };
      const token = await authServices.login(user);
      return res
        .status(200)
        .json({ result: "successfully logged in", user: token });
    } catch (error) {
      return res.status(500).json({ result: "error", message: error.message });
    }
  },
  register: async (req, res) => {
    try {
      const user = convertUserDataToObject(req);
      const result = await authServices.register(user);
      return res
        .status(201)
        .json({ result: "successfully registered user", user: result });
    } catch (error) {
      return res.status(500).json({ result: "error", message: error.message });
    }
  },
};
