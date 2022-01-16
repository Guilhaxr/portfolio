
const nodemailer = require("nodemailer");
require('dotenv').config();

    const contactEmail = (options) =>{

        const contactEmail = nodemailer.createTransport({
            service: 'gmail',
            auth: {
            user: `${process.env.DB_EMAIL}`,
            pass: `${process.env.DB_PASS}`,
            },
        });
        
        contactEmail.verify((err) => {
            if (err) {
            console.log(err);
            } else {
            console.log("Ready to Send");
            }
        });

    }

    module.exports = contactEmail;

