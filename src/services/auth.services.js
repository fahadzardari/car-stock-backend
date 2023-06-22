import bcrypt from "bcrypt";
import prisma from "../utils/prisma.js";
import { getToken } from "../utils/jwtToken.js";
export const authServices = {
  login: async (user) => {
    try {
      const result = await prisma.user.findUnique({
        where: {
          email: user.email,
        },
      });
      if (!result) {
        throw new Error("Incorrect username or password");
      }
      const isMatch = await bcrypt.compare(user.password, result.password);
      if (!isMatch) {
        throw new Error("Incorrect username or password");
      }
      return getToken(user.email);
    } catch (error) {
      throw error;
    }
  },
  register: async (user) => {
    try {
      const hash = await bcrypt.hash(user.password, 10);
      user.password = hash;
      const result = await prisma.user.create({
        data: user,
      });
      return result;
    } catch (error) {
      throw error;
    }
  },
};
