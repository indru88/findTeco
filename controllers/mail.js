const { response } = require('express');
const { matchedData } = require('express-validator');
const Usuario = require('../models/nomina');
const { handleHttpError } = require('../utils/handleErrors');
const email = require('../config/mail')

/**
 * Envia una tabla HTML por correo
 */
const emailer = async (req, res = response) => {
  try {
    /**
     * Query con mongoose para generar la tabla del mail
     */
    const resultado = await Usuario.aggregate(
      [{
        $lookup:
        {
          from: 'nombrednis',
          localField: 'dnijefe',
          foreignField: 'dni',
          as: 'datosjefe'
        }
      },
      { $addFields: { nombJefe: { $first: "$datosjefe.nombre" }, apeJefe: { $first: "$datosjefe.apellido" } } },
      {
        $project: {
          "ApellidoNombre": { $concat: ["$apellido", " ", "$nombre"] },
          "Legajo": "$legajo",
          "DNI": "$dni",
          "Edad": { $dateDiff: { startDate: "$fechacumpleanos", endDate: "$$NOW", unit: "year" } },
          "Rol": "$rol",
          "JefeInmediato": {
            $ifNull: [
              { $concat: ["$nombJefe", " ", "$apeJefe"] },
              { $concat: ["$apellido", " ", "$nombre"] }
            ]
          },
          "Gerencia": "$gerencia",
          "Sector": {
            $ifNull: [
              "$sector",
              ""
            ]
          },
          _id: 0
        }
      }]
    )
    email.sendMail(resultado)
    res.json({ msg: 'ok' })
    res.status(200)

  } catch (e) {
    handleHttpError(res, 'ERROR_SENT_MAIL')
  }


}

module.exports = { emailer }