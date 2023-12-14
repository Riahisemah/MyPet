const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: "riahisamh817@gmail.com", // Your email
        pass: "nvaFt1y8wOYzZ4h9", // Your email password or app-specific password
      },
    });

    let message = {
      from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
      to: options.email,
      subject: options.subject,
      text: options.message,
      html: `<a href=${options.url}><button>Click Here</button></a>`,
    };

    let info = transporter.sendMail(message);
    console.log("Email sent 1 : " + info.response);
    return info;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to send email");
  }
};

module.exports = sendEmail;
/*
const ElasticEmail = require("elasticemail-webapiclient");
const defaultClient = ElasticEmail.ApiClient.instance;
const apikey = defaultClient.authentications["apikey"];

// Set your Elastic Email API key
apikey.apiKey =
  "B02EA7CD556591BB37879564FF03EEFE5F87F11FAA11395AB8CF425E44A63A0A74B4842291455F8A84D3BADA0296F566";

// Initialize the Email API
const api = new ElasticEmail.EmailApi();

const sendEmail = async (options) => {
  try {
    const msg = {
      subject: options.subject,
      from: process.env.FROM_EMAIL,
      fromName: process.env.FROM_NAME,
      to: options.email,
      body: `<a href="${options.url}"><button>Click Here</button></a>`,
      bodyType: "Html",
    };

    // Send the email using the Elastic Email API
    const result = await api.emailSendPost({ body: msg });
    console.log("Email sent:", result);
    return result;
  } catch (error) {
    console.error("Failed to send email:", error);
    throw new Error("Failed to send email");
  }
};

module.exports = sendEmail;*/
