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
  getPaginated: async (req) => {
    try {
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);
      const skip = (page - 1) * limit;
      const contacted = (req.query.contacted === "true");
      let leads;
      let totalLeads;
      const commonOptions = {
        skip,
        take: limit,
      };
      if (contacted) {
        // If contacted is true, fetch leads with contacted as true
        totalLeads = await prisma.lead.count({ where: { contacted: true } });
        leads = await prisma.lead.findMany({
          ...commonOptions,
          where: { contacted: true },
          orderBy: { timestamp: "desc" },
        });
      } else {
        // If contacted is not provided or false, fetch all leads
        totalLeads = await prisma.lead.count({where: {contacted: false}});
        leads = await prisma.lead.findMany({
          ...commonOptions,
          where: { contacted: false },
          orderBy: { timestamp: "desc" },
        });
      }

      return {
        leads,
        currentPage: page,
        totalPages: Math.ceil(totalLeads / limit),
      };
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
  updateStatus: async (id, status) => {
    try {
      const result = await prisma.lead.update({
        where: {
          id: id,
        },
        data: {
          contacted: status,
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
