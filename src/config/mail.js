import nodemailer from "nodemailer";
import { MAIL, MAIL_PASSWORD } from "./envVariables.js";
export const transporter = nodemailer.createTransport({
  //service: "gmail",
  host: "mail.grace-japan.com",
  port: 465,
  secure: true,
  auth: {
    user: MAIL,
    pass: MAIL_PASSWORD,
  },
});
