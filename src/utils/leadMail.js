import { MAIL } from "../config/envVariables.js";
import { transporter } from "../config/mail.js";

export const sendMail = (lead) => {
  const mailOptions = {
    from: MAIL,
    to: "Grace.int01@gmail.com",
    subject: "Lead Is Created",
    html: `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
            }
            .container {
              background-color: #fff;
              padding: 20px;
              border-radius: 5px;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }
            h1 {
              color: #333;
            }
            p {
              margin: 5px 0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Lead is created</h1>
            <p><strong>Lead Name:</strong> ${lead.name}</p>
            <p><strong>Lead Email:</strong> ${lead.email}</p>
            <p><strong>Lead Phone:</strong> ${lead.phone}</p>
            <p><strong>Interested Make:</strong> ${lead.make}</p>
            <p><strong>Interested Model:</strong> ${lead.model}</p>
            <p><strong>Interested CarId:</strong> ${lead.carId}</p>
            <p><strong>Message:</strong> ${lead.message}</p>
          </div>
        </body>
      </html>
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

