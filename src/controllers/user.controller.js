import { userServices } from "../services/user.services.js";

export const userController = {
  getAll: async (req, res) => {
    try {
      const users = await userServices.getAll();
      return res
        .status(200)
        .json({ result: "successfully got users", users: users });
    } catch (error) {
      return res.status(500).json({ result: "error", message: error.message });
    }
  },
  getById: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const user = await userServices.getById(id);
      return res
        .status(200)
        .json({ result: "successfully got user", user: user });
    } catch (error) {
      return res.status(500).json({ result: "error", message: error.message });
    }
  },
  getByUsername: async (req, res) => {
    try {
      const username = req.params.username;
      const user = await userServices.getByUsername(username);
      return res
        .status(200)
        .json({ result: "successfully got user", user: user });
    } catch (error) {
      return res.status(500).json({ result: "error", message: error.message });
    }
  },
  create: async (req, res) => {
    try {
      const user = await userServices.create(req.body);
      return res
        .status(201)
        .json({ result: "successfully created user", user: user });
    } catch (error) {
      return res.status(500).json({ result: "error", message: error.message });
    }
  },
  update: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const user = await userServices.update(id, req.body);
      return res
        .status(200)
        .json({ result: "successfully updated user data", user: user });
    } catch (error) {
      return res.status(500).json({ result: "error", message: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const user = await userServices.delete(id);
      return res
        .status(200)
        .json({ result: "successfully deleted user", user: user });
    } catch (error) {
      return res.status(500).json({ result: "error", message: error.message });
    }
  },
};
