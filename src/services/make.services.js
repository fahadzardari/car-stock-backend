import prisma from "../utils/prisma.js";
export const makeServices = {
  get: async () => {
    try {
      const makes = await prisma.make.findMany();
      return makes;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  create: async (make) => {
    try {
      const result = await prisma.make.create({ data: make });
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  getMakeById: async (id) => {
    try {
      const result = await prisma.make.findUnique({
        where: {
          id: id, // Replace with the actual ID of the make you want to find
        },
      });
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  delete: async (id) => {
    try {
      const result = await prisma.make.delete({
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
