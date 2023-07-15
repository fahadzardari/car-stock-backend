import { authServices } from "../services/auth.services.js";
export const authController = {
  login: async (req, res) => {
    try {
      const token = await authServices.login(req.body);
      return res
        .status(200)
        .json({ result: "successfully logged in", token: token });
    } catch (error) {
      return res.status(500).json({ result: "error", message: error.message });
    }
  },
  register: async (req, res) => {
    try {
      const result = await authServices.register(req.body);
      return res
        .status(201)
        .json({ result: "successfully registered user", token: result });
    } catch (error) {
      return res.status(500).json({ result: "error", message: error.message });
    }
  },
  verify: async (req, res) => {
    try {
      const result = await authServices.verify(req.body);
      return res
        .status(200)
        .json({ result: "successfully verified user", verified: true });
    } catch (error) {
      return res.status(200).json({ result: "error", verified: false });
    }
  },
};
