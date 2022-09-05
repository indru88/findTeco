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
          "Apellido y nombre": { $concat: ["$apellido", " ", "$nombre"] },
          "Legajo": "$legajo",
          "DNI": "$dni",
          "Edad": { $dateDiff: { startDate: "$fechacumpleanos", endDate: "$$NOW", unit: "year" } },
          "Rol": "$rol",
          "Jefe Inmediato": {
            $ifNull: [
              { $concat: ["$nombJefe", " ", "$apeJefe"] },
              { $concat: ["$apellido", " ", "$nombre"] }
            ]
          },
          "Gerencia": "$gerencia",
          "Sector": "$sector",
        }
      }]
    )
    res.json({ resultado })
    res.status(200)
  } catch (e) {
    handleHttpError(res, 'ERROR_DB')
  }


}

module.exports = { sendMail }