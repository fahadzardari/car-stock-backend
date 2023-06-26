import prisma from "../utils/prisma.js";

export const userServices = {
  getAll: async () => {
    try {
      const users = await prisma.user.findMany();
      return users;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  getById: async (id) => {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: id, // Replace with the actual ID of the user you want to find
        },
      });
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  getByUsername: async (username) => {
    try {
      const user = await prisma.user.findUnique({
        where: {
          username: username,
        },
      });
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  create: async (user) => {
    try {
      const result = await prisma.user.create({ data: user });
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  update: async (id, user) => {
    try {
      const result = await prisma.user.update({
        where: {
          id: id,
        },
        data: user,
      });
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  delete: async (id) => {
    try {
      const result = await prisma.user.delete({
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
