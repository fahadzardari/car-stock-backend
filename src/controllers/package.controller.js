// package.controller.js
import { packageServices } from "../services/package.services.js";

export const packageController = {
  get: async (req, res) => {
    try {
      const packages = await packageServices.get();
      return res
        .status(200)
        .json({ result: "successfully got packages", packages: packages });
    } catch (error) {
      return res.status(500).json({ result: "error", message: error.message });
    }
  },
  create: async (req, res) => {
    try {
      const pkg = await packageServices.create(req.body);
      return res
        .status(201)
        .json({ result: "successfully created package", package: pkg });
    } catch (error) {
      return res.status(500).json({ result: "error", message: error.message });
    }
  },
  filter: async (req, res) => {
    try {
      const filter = req.query;
      const packages = await packageServices.filter(filter);
      return res
        .status(200)
        .json({ result: "successfully got packages", packages: packages });
    } catch (error) {
      return res.status(500).json({ result: "error", message: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const pkg = await packageServices.delete(id);
      return res
        .status(200)
        .json({ result: "successfully deleted package", package: pkg });
    } catch (error) {
      res.status(500).json({ result: "error", message: error.message });
    }
  },
};
