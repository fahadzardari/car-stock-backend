import { leadServices } from "../services/lead.services.js";
export const leadController = {
  get: async (req, res) => {
    try {
      const leads = await leadServices.get();
      return res
        .status(200)
        .json({ result: "successfully got leads", leads: leads });
    } catch (error) {
      return res.status(500).json({ result: "error", message: error.message });
    }
  },
  create: async (req, res) => {
    try {
      const lead = await leadServices.create(req.body);
      return res
        .status(201)
        .json({ result: "successfully created lead", lead: lead });
    } catch (error) {
      return res.status(500).json({ result: "error", message: error.message });
    }
  },
  getCarById: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const lead = await leadServices.getCarById(id);
      return res.status(200).json({ result: "successfully got lead", lead: lead });
    } catch (error) {
      return res.status(500).json({ result: "error", message: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const lead = await leadServices.delete(id);
      return res
        .status(200)
        .json({ result: "successfully deleted lead", lead: lead });
    } catch (error) {
      res.status(500).json({ result: "error", message: error.message });
    }
  },
  update: async (req, res) => {
        try {
          const id = parseInt(req.params.id);
          const lead = await leadServices.update(id , req.body);
          return res
            .status(200)
            .json({ result: "successfully updated lead data", lead: lead });
        } catch (error) {
          res.status(500).json({ result: "error", message: error.message });
        }
      }
};
