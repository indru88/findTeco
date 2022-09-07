const config = require('config')
const nodemailer = require('nodemailer');
const tablaHtml = require('../utils/tablaHtml')

/**
 * Genera un transport para nodemailer
 * @returns transport
 */
const createTrans = () => {
  const transport = nodemailer.createTransport({
    host: config.get('mail.MAIL_SMTP'),
    port: config.get('mail.MAIL_PORT'),
    auth: {
      user: config.get('mail.MAIL_USER'),
      pass: config.get('mail.MAIL_PASS')
    }
  });
  return transport;
}

/**
 * Con esta función realizamos el envio del mail
 * @param {*} resultado => Objeto json que contiene la info de la tabla final
 * @returns
 */
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
