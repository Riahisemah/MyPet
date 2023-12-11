const nodemailer = require("nodemailer");

const verifyEmail = async (options) => {
  let transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.PORT_BREVO,
    secure: true,
    auth: {
      user: process.env.FROM_EMAIL, // Your email
      pass: process.env.EMAIL_PASSWORD, // Your email password or app-specific password
    },
  });

  let mailOptions = {
    from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
    to: options.email,
    subject: options.subject,
    html: `<div style="width:100%; height:100%;"><h1 style="font-weight:500">Hey,
     ${options.name}<br>Welcome to ShopPoint</h1><h1>Thanks for Signing up on our app</h1><h3>Your Code for verification is :
      ${options.code}</h3></div><p>If this request is not made by you kindly ignore this mail.</p><p>Regards, <strong>Sajid Ansari(Owner)</strong></p>`,
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to send email for verification.");
  }
};

module.exports = verifyEmail;
