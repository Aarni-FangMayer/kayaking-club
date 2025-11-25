const emailRouter = require("express").Router();
const nodemailer = require("nodemailer");

emailRouter.post("/", async (request, response) => {
  const { name, email, message } = request.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.ADMIN_EMAIL, pass: process.env.ADMIN_PASSWORD },
    });

    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.ADMIN_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "New Message From Contact Form",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    response.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email send error:", error);
    response.status(500).json({ success: false, error: "Failed to send email" });
  }
});

module.exports = emailRouter;