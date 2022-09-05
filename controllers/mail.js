const { response } = require('express');
const { matchedData } = require('express-validator');
const Usuario = require('../models/nomina');
const { handleHttpError } = require('../utils/handleErrors');

/**
 * Retorna envia el correo con los filtros enviados
 * @param {*} req 
 * @param {*} res 
 */
const sendMail = async (req, res = response) => {
  try {
    const resultado = await Usuario.aggregate(
      [
        {
          $lookup:
          {
            from: 'nombrednis',
            localField: 'dnijefe',
            foreignField: 'dni',
            as: 'datosJefe'
          }
        }
      ]
    )
    res.json({ resultado })
    res.status(200)
  } catch (e) {
    handleHttpError(res, 'ERROR_DB')
  }


}

module.exports = { sendMail }