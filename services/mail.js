var nodemailer = require("nodemailer");

const user = process.env.GMAIL_EMAIL;
const pass = process.env.GMAIL_PASSWORD;

function sendEmail(receiver) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: user,
      pass: pass,
    },
  });

  var mailOptions = {
    from: user,
    to: receiver,
    subject: "Live Fit Food clone website.",
    text: "Live Fit Food clone website.",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

module.exports = Object.freeze({
  sendEmail: sendEmail,
});
