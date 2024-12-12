import nodemailer from "nodemailer";

const sendMail = async (toMail, data) => {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "cestt.enquiry@gmail.com",
        pass: "kuotwqxmbbqymuhm",
      },
    });

    let mailOptions = {
      from: "cestt.enquiry@gmail.com",
      to: toMail,
      subject: "Thaks for Registering with CESTT",
      text: data,
    };
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("Error sending email:", error.message);
          reject(error);
        } else {
          console.log("Email sent:", info.response);
          resolve(info);
        }
      });
    });
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

export { sendMail };
