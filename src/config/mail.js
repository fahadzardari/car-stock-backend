import nodemailer from "nodemailer";
import { MAIL, MAIL_PASSWORD } from "./envVariables.js";
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: MAIL,
    pass: MAIL_PASSWORD,
  },
});


