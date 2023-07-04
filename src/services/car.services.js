import prisma from "../utils/prisma.js";
import { setCarImages } from "../helpers/setCarImages.js";
export const carServices = {
  get: async () => {
    try {
      const cars = await prisma.car.findMany();
      return cars;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  getPaginated: async (req) => {
    try {
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);
      const skip = (page - 1) * limit;
      const totalCars = await prisma.car.count();
      const cars = await prisma.car.findMany({
        skip,
        take: limit,
        select: {
          id: true,
          make: true,
          model: true,
          year: true,
          priceRange: true,
          steering: true,
          mileage: true,
          image1: true,
        },
      });

      return {
        cars,
        currentPage: page,
        totalPages: Math.ceil(totalCars / limit),
      };
    } catch (error) {
      throw new Error(error.message);
    }
  },
  create: async (car) => {
    try {
      car = setCarImages(car);
      const result = await prisma.car.create({ data: car });
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  getCarById: async (id) => {
    try {
      const result = await prisma.car.findUnique({
        where: {
          id: id, // Replace with the actual ID of the car you want to find
        },
      });
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  getMakes: async () => {
    try {
      const result = await prisma.car.findMany({
        select: {
          make: true,
        },
        distinct: ["make"],
      });
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  delete: async (id) => {
    try {
      const result = await prisma.car.delete({
        where: {
          id: id,
        },
      });
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  update: async (id, car) => {
    try {
      const result = await prisma.car.update({
        where: {
          id: id,
        },
        data: car,
      });
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
