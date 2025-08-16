import { sendEmail } from "../utils/sendMail.js";

export const startServer = async (req, res) => {
  // for render server to start. usually render takes few seconds to start
  try {
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ success: false, message: "server error" });
  }
};

export const sendMessage = async (req, res) => {
  // send the message to mail

  try {
    const { firstName, lastName, email, message } = req.body;
    
    const mailResponse = await sendEmail({
      from: email,
      subject: `New Contact form your portfolio submitted by ${firstName} ${lastName}`,
      text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Message: ${message}
    `,
    });

    if (mailResponse.success) {
      return res
        .status(200)
        .json({ success: true, message: "Message send successfully" });
    } else {
      return res
        .status(500)
        .json({ success: false, message: "couldint send message try later" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "server error try later" });
  }
};
