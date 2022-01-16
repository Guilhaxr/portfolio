
// const express = require('express');
// const nodemailer = require("nodemailer");
// const contactRouter = express.Router();
// const contactEmail = "../Utils/ContactEmail.js"
// require('dotenv').config();

// contactRouter.post("/", (req, res) => {
//     const name = req.body.name;
//     const email = req.body.email;
//     const message = req.body.message; 
//     const mail = {
//       from: name,
//       to: `${process.env.DB_EMAIL2}`,
//       subject: "Contact Form Submission",
//       html: `<p>Name: ${name}</p>
//              <p>Email: ${email}</p>
//              <p>Message: ${message}</p>`,
//     };
//     contactEmail.sendMail(mail, (error) => {
//       if (error) {
//         res.status(500).json({ status: "ERROR" });
//       } else {
//         res.status(200).json({ status: "Message Sent" });
//       }
//     });
//   });

//   module.exports = contactRouter;