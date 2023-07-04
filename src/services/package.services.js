// package.services.js
import prisma from "../utils/prisma.js";

export const packageServices = {
  get: async () => {
    try {
      const packages = await prisma.package.findMany({
        include: {
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
        },
      });
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
  filter: async (filter) => {
    filter.id ? (filter.id = parseInt(filter.id)) : null;
    filter.makeId ? (filter.makeId = parseInt(filter.makeId)) : null;
    filter.modelId ? (filter.modelId = parseInt(filter.modelId)) : null;
    try {
      const result = await prisma.package.findMany({
        where: filter,
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
