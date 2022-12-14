const mongoose = require('mongoose')
const config = require('config')
const Usuario = require('../models/nomina')
const nombreDni = require('../models/nombreDni')
const cargarExcel = require('../utils/excel')

/**
 * Generamos la conexión con la DB
 */
const dbConection = async () => {
  try {
    await mongoose.connect(config.get('db.mongo'), {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('--->> DB OK <<---')
  } catch (err) {
    console.log('--->> DB FAIL <<---')
    throw new Error(err)
  }
}

/**
 * Generamos limpieza / carga de la info en la DB en cada reinicio
 */
const preload = async () => {
  Usuario.count({}, function (err, count) {
    if (count > 0) {
      mongoose.connection.collection('usuarios').drop()
      mongoose.connection.collection('nombrednis').drop()
    }
    const datos = cargarExcel()
    Usuario.insertMany(datos)
    nombreDni.insertMany(datos)
  })
}

module.exports = {
  dbConection,
  preload
}