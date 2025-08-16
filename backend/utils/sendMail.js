import nodemailer from "nodemailer";

export const sendEmail = async ({ from, subject, text }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from,
      to: process.env.MAIL_USER,
      subject,
      text,
    };

    await transporter.sendMail(mailOptions);
    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, message: "Failed to send email" };
  }
};
