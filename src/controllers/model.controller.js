// model.controller.js
import { modelServices } from "../services/model.services.js";

export const modelController = {
  get: async (req, res) => {
    try {
      const models = await modelServices.get();
      return res
        .status(200)
        .json({ result: "successfully got models", models: models });
    } catch (error) {
      return res.status(500).json({ result: "error", message: error.message });
    }
  },
  create: async (req, res) => {
    try {
      const model = await modelServices.create(req.body);
      return res
        .status(201)
        .json({ result: "successfully created model", model: model });
    } catch (error) {
      return res.status(500).json({ result: "error", message: error.message });
    }
  },
  getModelById: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const model = await modelServices.getModelById(id);
      if (model == null)
        return res.status(404).json({ result: "model doesn't exist" });
      return res
        .status(200)
        .json({ result: "successfully got model", model: model });
    } catch (error) {
      return res.status(500).json({ result: "error", message: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const model = await modelServices.delete(id);
      return res
        .status(200)
        .json({ result: "successfully deleted model", model: model });
    } catch (error) {
      res.status(500).json({ result: "error", message: error.message });
    }
  },
};
