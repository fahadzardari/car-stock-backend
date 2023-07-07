import { makeServices } from "../services/make.services.js";
export const makeController = {
  get: async (req, res) => {
    try {
      const makes = await makeServices.get();
      return res
        .status(200)
        .json({ result: "successfully got makes", makes: makes });
    } catch (error) {
      return res.status(500).json({ result: "error", message: error.message });
    }
  },
  create: async (req, res) => {
    try {
      const make = await makeServices.create(req.body);
      return res
        .status(201)
        .json({ result: "successfully created make", make: make });
    } catch (error) {
      return res.status(500).json({ result: "error", message: error.message });
    }
  },
  getMakeById: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const make = await makeServices.getMakeById(id);
      if (make == null)
        return res.status(404).json({ result: "make Doesn't exist" });
      return res
        .status(200)
        .json({ result: "successfully got make", make: make });
    } catch (error) {
      return res.status(500).json({ result: "error", message: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const make = await makeServices.delete(id);
      return res
        .status(200)
        .json({ result: "successfully deleted make", make: make });
    } catch (error) {
      res.status(500).json({ result: "error", message: error.message });
    }
  },
};
