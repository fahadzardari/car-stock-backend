// model.services.js
import prisma from "../utils/prisma.js";

export const modelServices = {
  get: async () => {
    try {
      const models = await prisma.model.findMany();
      return models;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  create: async (model) => {
    try {
      const result = await prisma.model.create({ data: model });
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  getModelById: async (id) => {
    try {
      const result = await prisma.model.findUnique({
        where: {
          id: id, // Replace with the actual ID of the model you want to find
        },
      });
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  delete: async (id) => {
    try {
      const result = await prisma.model.delete({
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
