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
  getPaginated: async (req, res) => {
    try {
      const { cars, options, totalCars, currentPage, totalPages } =
        await carServices.getPaginated(req);
      return res.status(200).json({
        result: "successfully got paginated cars",
        totalCars: totalCars,
        currentPage: currentPage,
        totalPages: totalPages,
        cars: cars,
        options: options,
      });
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
      const { car, options } = await carServices.getCarById(id);
      if (car == null)
        return res.status(404).json({ result: "Car Doesn't exist" });
      return res
        .status(200)
        .json({ result: "successfully got car", car: car, options: options });
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
      const car = await carServices.update(id, req.body);
      return res
        .status(200)
        .json({ result: "successfully updated car data", car: car });
    } catch (error) {
      res.status(500).json({ result: "error", message: error.message });
    }
  },
  updateOptions: async (req, res) => {
    try {
      const result = await carServices.updateOptions(req.params.id, req.body);
      res
        .status(200)
        .json({ result: "successfully updated options", options: result });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
