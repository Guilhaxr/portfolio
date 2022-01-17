
const express = require('express');
const nodemailer = require("nodemailer");
const sgMail = require('@sendgrid/mail')
const contactRouter = express.Router();
require('dotenv').config();





contactRouter.post("/", async (req, res) => {
  const {name, email, message} = req.body;
    
    const msg = {
      from: `${process.env.DB_EMAIL}`,
      to: `${process.env.DB_EMAIL2}`,
      subject: "Contact Form Submission",
      text:`${message}`,
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };

    try {
      await sgMail.send(msg);
    } catch (error) {
      console.error(error);
  
      if (error.response) {
        console.error(error.response.body)
      }
    }

  });

  module.exports = contactRouter;