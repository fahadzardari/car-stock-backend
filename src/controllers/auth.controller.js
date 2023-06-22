import { authServices } from "../services/auth.services.js";
import convertUserDataToObject from "../helpers/convertUserDataToObject.js";
export const authController = {
  login: async (req, res) => {
    try {
      const token = await authServices.login(req.body);
      return res
        .status(200)
        .json({ result: "successfully logged in", user: token });
    } catch (error) {
      return res.status(500).json({ result: "error", message: error.message });
    }
  },
  register: async (req, res) => {
    try {

      const result = await authServices.register(req.body);
      return res
        .status(201)
        .json({ result: "successfully registered user", user: result });
    } catch (error) {
      return res.status(500).json({ result: "error", message: error.message });
    }
  },
};
