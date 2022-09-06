const nodemailer = require('nodemailer');
const tablaHtml = require('../utils/tablaHtml')


const createTrans = () => {
  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "984df72a24efa8",
      pass: "d5218eeb031c33"
    }
  });
  return transport;
}

const sendMail = async (resultado) => {
  const transporter = createTrans()
  const info = await transporter.sendMail({
    from: '"Fede Indrunas" <challengefindrunas@gmail.com>',
    to: 'findrunas@gmail.com',
    subject: 'Tabla Empleados',
    html: tablaHtml(resultado)
  });

  console.log("Message sent: %s", info.messageId);

  return
}

exports.sendMail = (resultado) => sendMail(resultado)
