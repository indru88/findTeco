const mongoose = require('mongoose')
const Usuario = require('../models/nomina')
const nombreDni = require('../models/nombreDni')
const cargarExcel = require('../utils/excel')


const dbConection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('--->> DB OK <<---')
  } catch (err) {
    console.log('--->> DB FAIL <<---')
    throw new Error(err)
  }
}

const preload = async () => {
  Usuario.count({}, function (err, count) {
    if (count > 10) {
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