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
