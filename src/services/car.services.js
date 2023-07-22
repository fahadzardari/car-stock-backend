import prisma from "../utils/prisma.js";
import { setCarImages } from "../helpers/setCarImages.js";
import { processCarQuery } from "../helpers/processCarQuery.js";
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
      const query = processCarQuery(req.query);
      const page = parseInt(query.page) || 1;
      const limit = parseInt(query.limit) || 10;
      const where = query.where;
      const order = query.orderBy;
      const skip = (page - 1) * limit;
      console.log(query);
      const totalCars = await prisma.car.count({
        where: {
          ...where,
        },
      });
      console.log(query);
      const cars = await prisma.car.findMany({
        skip,
        take: limit,
        orderBy: {
          ...order,
        },
        where: {
          ...where,
        },
        select: {
          id: true,
          mileage: true,
          price: true,
          steeringPosition: true,
          transmissionType: true,
          image1: true,
          location: true,
          make: {
            select: {
              name: true,
            },
          },
          model: {
            select: {
              name: true,
            },
          },
          package: {
            select: {
              name: true,
            },
          },
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
  create: async (body) => {
    try {
      console.log(body.data)
      body.data = setCarImages(body.data);
      body.data.registrationDate = new Date(body.data.registrationDate);
      body.data.manufactureDate = new Date(body.data.manufactureDate);
      const result = await prisma.car.create({ data: body.data });
      if (body.options) {
        body.options.carId = result.id;
        await prisma.options.create({
          data: body.options,
        });
      }
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
