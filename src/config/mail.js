import nodemailer from "nodemailer";
import { MAIL, MAIL_PASSWORD } from "./envVariables.js";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: MAIL,
    pass: MAIL_PASSWORD,
  },
});

const mailOptions = {
  from: MAIL,
  to: "fahadzardari222@gmail.com",
  subject: "Subject",
  text: "Email content",
};

export const sendMail = () =>{
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
    // do something useful
  }
});
}