// package.services.js
import prisma from "../utils/prisma.js";

export const packageServices = {
  get: async () => {
    try {
      const packages = await prisma.package.findMany();
      return packages;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  create: async (pkg) => {
    try {
      const result = await prisma.package.create({ data: pkg });
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  getPackageById: async (id) => {
    try {
      const result = await prisma.package.findUnique({
        where: {
          id: id, // Replace with the actual ID of the package you want to find
        },
      });
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  delete: async (id) => {
    try {
      const result = await prisma.package.delete({
        where: {
          id: id,
        },
      });
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
