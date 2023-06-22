import { carServices } from "../services/car.services.js";
export const carController = {
  get: async (req, res) => {
    try {
      const cars = await carServices.get();
      return res
        .status(200)
        .json({ result: "successfully got cars", cars: cars });
    } catch (error) {
      return res.status(500).json({ result: "error", message: error.message });
    }
  },
  create: async (req, res) => {
    try {
      const car = await carServices.create(req.body);
      return res
        .status(201)
        .json({ result: "successfully created car", car: car });
    } catch (error) {
      return res.status(500).json({ result: "error", message: error.message });
    }
  },
  getCarById: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const car = await carServices.getCarById(id);
      return res.status(200).json({ result: "successfully got car", car: car });
    } catch (error) {
      return res.status(500).json({ result: "error", message: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const car = await carServices.delete(id);
      return res
        .status(200)
        .json({ result: "successfully deleted car", car: car });
    } catch (error) {
      res.status(500).json({ result: "error", message: error.message });
    }
  },
  update: async (req, res) => {
        try {
          const id = parseInt(req.params.id);
          const car = await carServices.update(id , req.body);
          return res
            .status(200)
            .json({ result: "successfully updated car data", car: car });
        } catch (error) {
          res.status(500).json({ result: "error", message: error.message });
        }
      }
};
