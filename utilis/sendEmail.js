const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.HOST,
      port: process.env.PORT_BREVO,
      secure: true,
      auth: {
        user: process.env.FROM_EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });

    let message = {
      from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
      to: options.email,
      subject: options.subject,
      text: options.message,
      html: `<a href=${options.url}><button>Click Here</button></a>`,
    };

    let info = await transporter.sendMail(message);
    console.log("Email sent: " + info.response);
    return info;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to send email");
  }
};

module.exports = sendEmail;
