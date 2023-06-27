import prisma from "../utils/prisma.js";
export const leadServices = {
  get: async () => {
    try {
      const leads = await prisma.lead.findMany();
      return leads;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  create: async (lead) => {
    try {
      const result = await prisma.lead.create({ data: lead });
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  getLeadById: async (id) => {
    try {
      const result = await prisma.lead.findUnique({
        where: {
          id: id, // Replace with the actual ID of the lead you want to find
        },
      });
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  delete: async (id) => {
    try {
      const result = await prisma.lead.delete({
        where: {
          id: id,
        },
      });
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  update: async (id, lead) => {
    try {
      const result = await prisma.lead.update({
        where: {
          id: id,
        },
        data: lead,
      });
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
