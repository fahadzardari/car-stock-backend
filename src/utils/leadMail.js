import { MAIL } from "../config/envVariables.js";
import { transporter } from "../config/mail.js";

export const sendMail = (lead) => {
  const mailOptions = {
    from: MAIL,
    // to: <Admin Mail>,
    subject: "Lead Is Created",
    html: `<h1>Lead is created</h1>
           <p>Lead Name: ${lead.name}</p>
           <p>Lead Email: ${lead.email}</p>
           <p>Lead Phone: ${lead.phone}</p>
           <p>Interested Make: ${lead.make}}</p>
           <p>Interested Model: ${lead.model}</p>
           <p>Interested CarId: ${lead.carId}</p>
           <p>Message: ${lead.message}</p>
    `,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      // do something useful
    }
  });
};
